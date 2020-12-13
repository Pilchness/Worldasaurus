import * as mapsource from './leafletcode/mappingConstants.js';
import { getCurrentNavCords } from './leafletcode/currentLocation.js';
import { drawCountryOutline } from './leafletcode/countryOutlines.js';
import { getListOfPossibleCountries } from './leafletcode/countrySearch.js';
//import { handleWeatherData } from './weather.js';
//import { getCountryISOCode } from './getCountryISO.js';
import { getCountryImage } from './ajax/countryImageSearch.js';
import { decodeGeodata } from './ajax/geoDataDecode.js';
import { pageHeader } from './components/pageHeader.js';
import { leftMenu } from './components/leftMenu.js';

const countryFocus = (country) => {
  //when one country is selected, get data and change outline to green
  $('#countrySearch').val(country);
  handleWeatherData(country);
  getCountryImage(country.split(' ').join('_'));
  getCountryISOCode(country);
  //let outlineColour = 'green';
};

mapsource.stadia(); //default map style
const currentLocation = getCurrentNavCords();

$('#content').html(pageHeader).append(leftMenu);
let parsedGeoDataArray; //parsed geoData JSON array of countries and data
let countryList; //list of country names
let possibleMatchesToInput; //list of predicted countries based on letters typed

const generateCountryList = (parsedGeoDataArray) => {
  console.log(parsedGeoDataArray);
  //create object of countries from geodata
  let countries = {};
  for (let i = 0; i < parsedGeoDataArray.length; i++) {
    countries[i] = parsedGeoDataArray[i].properties.name.toLowerCase();
  }
  countryList = countries;
  return countries;
};

decodeGeodata().then((parsedGeoDataArray) => (countryList = generateCountryList(parsedGeoDataArray)));
// .then((countryList) => getListOfPossibleCountries(countryList));

//const setInput = (country) => $('#country-search').text(country);
// $('#jamaica.dropdown').click(function () {
//   console.log('hello');
//   setInput($('#dropdown').val());
// });

//$('#functions').html('goodbye');

$('#country-search').on('input', function () {
  console.log('searching');
  //console.log(countryList);
  const countryMatches = getListOfPossibleCountries(countryList);
  console.log('matches', countryMatches);
  const dropdownSuggestions = countryMatches.map((country) => {
    return `<li><button id="${country}" class="dropdown" onClick="setInputVal(${country})"  value="${country}">${country}</button></li>`;
  });
  $('#search-suggestions').html(
    `<ul style="margin-top: 14px">${dropdownSuggestions.slice(0, 5)}</ul>`.replace(/,/g, '')
  );
});

//drawCountryOutline(countryArray, countryNumber);
