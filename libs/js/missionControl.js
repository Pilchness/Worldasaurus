import * as mapsource from './leafletcode/mappingConstants.js';
import * as layeradd from './leafletcode/addToMapLayer.js';
import { getCurrentNavCords } from './leafletcode/currentLocation.js';
import { getListOfPossibleCountries } from './leafletcode/countrySearch.js';

//import { handleWeatherData } from './weather.js';
//import { getCountryISOCode } from './getCountryISO.js';
import { getCountryImage } from './ajax/countryImageSearch.js';
import { decodeGeodata } from './ajax/geoDataDecode.js';
import { pageHeader } from './components/pageHeader.js';
import { leftMenu } from './components/leftMenu.js';

let parsedGeoDataArray; //parsed geoData array of countries and data
let countryList; //object containing country names with numbered keys
//let possibleMatchesToInput; //list of predicted countries based on letters typed

const countryFocus = (country) => {
  console.log(country);
  //const countryISO = getCountryISOCode(country);
  layeradd.countryOutline(country);
  //getCountryImage(country.properties.name.split(' ').join('_'));
  //handleWeatherData(country);
};

mapsource.stadia(); //default map style
const currentLocation = getCurrentNavCords();

$('#content').html(pageHeader).append(leftMenu);

const generateCountryList = (parsedGeoData) => {
  //console.log('pgd', parsedGeoData);
  parsedGeoDataArray = parsedGeoData;

  //create object of countries from geodata
  let countries = {};
  for (let i = 0; i < parsedGeoDataArray.length; i++) {
    countries[i] = parsedGeoDataArray[i].properties.name.toLowerCase();
  }
  countryList = countries;
  return countries;
};

decodeGeodata().then((data) => generateCountryList(data));

$('#country-search').on('input', function () {
  const countryMatches = getListOfPossibleCountries(countryList, parsedGeoDataArray);

  const dropdownSuggestions = countryMatches.map((country) => {
    if (countryMatches.length === 1) {
      countryFocus(country);
    }
    return `<li><button id="${country.properties.name}" class="dropdown" 
    onClick="setInputVal(${country.properties.name})"  
    value="${country.properties.name}">${country.properties.name}</button></li>`;
  });
  $('#search-suggestions').html(
    `<ul style="margin-top: 14px">${dropdownSuggestions.slice(0, 30)}</ul>`.replace(/,/g, '')
  );
});

//drawCountryOutline(countryArray, countryNumber);
