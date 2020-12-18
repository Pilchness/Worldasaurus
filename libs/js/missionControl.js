import * as layeradd from './leafletcode/addToMapLayer.js';
import { getCurrentNavCords } from './leafletcode/currentLocation.js';
import { getListOfPossibleCountries } from './leafletcode/countrySearch.js';
import { handleWeatherData } from './ajax/getWeatherData.js';
import { getCountryImage } from './ajax/countryImageSearch.js';
import { getCountryData } from './modals/infoModal/countryData.js';
import { decodeGeodata } from './ajax/geoDataDecode.js';
import { pageHeader } from './components/pageHeader.js';
import { leftMenu } from './components/leftMenu.js';

let parsedGeoDataArray; //parsed geoData array of countries and data
let countryList; //object containing country names with numbered keys

const countryFocus = (country) => {
  $('#search-suggestions')
    .hide()
    .html(
      `<ul id="suggestion-list" style="margin-top: 20px"><li><button style="font-size: 20px; color: white;" id="${country.properties.name}" class="dropdown" 
    onClick="$('#info-modal-main').delay(0).fadeOut('slow');
    setTimeout(function () {
      $('#info-modal-main').modal('toggle');
    }, 300);"  
    value="${country.properties.name}">${country.properties.name}</button></li></ul>`
    )
    .fadeIn(1500);

  layeradd.addCountryOutline(country);
  getCountryImage(country.properties.name.split(' ').join('_'));
  getCountryData(country.properties.iso_a3);
  $('#default-overlay').hide();
  handleWeatherData(country);
};

export const detectClickOnCountryName = (targetButton) => {
  $(targetButton).on('click', function () {
    for (let j = 0; j < parsedGeoDataArray.length; j++) {
      if (parsedGeoDataArray[j].properties.name === $('#country-search').val()) {
        countryFocus(parsedGeoDataArray[j]);
        $('#reset').on('click', function () {
          countryFocus(parsedGeoDataArray[j]);
        });
      }
    }
  });
};

const currentLocation = getCurrentNavCords(); //do not remove

$('#content').html(pageHeader).append(leftMenu);

let countryCodes;

const generateCountryList = (parsedGeoData) => {
  parsedGeoDataArray = parsedGeoData;

  //create object of countries from geodata
  let countries = {};
  for (let i = 0; i < parsedGeoDataArray.length; i++) {
    countries[i] = parsedGeoDataArray[i].properties.name.toLowerCase();
  }
  countryList = countries;
  countryCodes = generateCountryCodeLookUp(parsedGeoDataArray);
  return countries;
};

export const countryCodeLookup = () => {
  return countryCodes;
};

const generateCountryCodeLookUp = (parsedGeoData) => {
  parsedGeoDataArray = parsedGeoData;
  let countryCodes = {};
  for (let i = 0; i < parsedGeoDataArray.length; i++) {
    countryCodes[parsedGeoDataArray[i].properties.iso_a3] = parsedGeoDataArray[i].properties.name;
  }
  return countryCodes;
};

decodeGeodata().then((data) => generateCountryList(data));

$('#country-search').on('input', function () {
  const countryMatches = getListOfPossibleCountries(countryList, parsedGeoDataArray);

  const dropdownSuggestions = countryMatches.map((country) => {
    if (countryMatches.length === 1) {
      countryFocus(country);
    }

    let countryNameSanitized = country.properties.name
      .slice(0, 20)
      .normalize('NFD')
      .replace(/'/g, '\x27')
      .replace(/[\u0300-\u036f]/g, '');

    return `<li style="margin: 1px;"><button id="${countryNameSanitized}" class="dropdown" 
    onClick="setInputVal('${countryNameSanitized}')"  
    value="${countryNameSanitized}">${countryNameSanitized}</button></li>`;
  });

  $('#search-suggestions').html(
    `<ul id="suggestion-list" style="margin-top: 18px; width: 300px">${dropdownSuggestions.slice(0, 10)}</ul>`.replace(
      /,/g,
      ''
    )
  );
  detectClickOnCountryName('.dropdown');
});
