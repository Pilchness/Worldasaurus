import * as mapsource from './leafletcode/mappingConstants.js';
import * as layeradd from './leafletcode/addToMapLayer.js';
import { getCurrentNavCords } from './leafletcode/currentLocation.js';
import { getListOfPossibleCountries } from './leafletcode/countrySearch.js';
import { handleWeatherData } from './ajax/getWeatherData.js';
import { getCountryImage } from './ajax/countryImageSearch.js';
import { decodeGeodata } from './ajax/geoDataDecode.js';
import { pageHeader } from './components/pageHeader.js';
import { leftMenu } from './components/leftMenu.js';

let parsedGeoDataArray; //parsed geoData array of countries and data
let countryList; //object containing country names with numbered keys

const countryFocus = (country) => {
  console.log(country.properties.name);
  //$('#search-suggestions').html(`<ul id="suggestion-list" style="margin-top: 14px"></ul>`);
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
  //const countryISO = getCountryISOCode(country);
  //const tooltipHTML = `<figure><h5>${country.properties.name}</h5><p>${country.properties.name}</p></figure>`;

  layeradd.addCountryOutline(country);
  getCountryImage(country.properties.name.split(' ').join('_'));
  handleWeatherData(country);
};

const detectClickOnCountryName = () => {
  $('.dropdown').on('click', function () {
    for (let j = 0; j < parsedGeoDataArray.length; j++) {
      //console.log(parsedGeoDataArray[j].properties.name, $('#country-search').val());
      if (parsedGeoDataArray[j].properties.name === $('#country-search').val()) {
        console.log('matched');
        countryFocus(parsedGeoDataArray[j]);
      }
    }
  });
};
// $(document).ready(function () {
//   var obj = document.getElementById('country-search');
//   obj.appendChild = function () {
//     alert('changed!');
//   };
// });

mapsource.arc(); //default map style
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
    console.log(`<li style="margin: 1px;"><button id="${country.properties.name}" class="dropdown" 
    onClick="setInputVal('${country.properties.name}')"  
    value="${country.properties.name}">${country.properties.name.slice(0, 20)}</button></li>`);
    return `<li style="margin: 1px;"><button id="${country.properties.name}" class="dropdown" 
    onClick="setInputVal('${country.properties.name}')"  
    value="${country.properties.name}">${country.properties.name.slice(0, 20)}</button></li>`;
  });

  $('#search-suggestions').html(
    `<ul id="suggestion-list" style="margin-top: 18px; width: 300px">${dropdownSuggestions.slice(0, 30)}</ul>`.replace(
      /,/g,
      ''
    )
  );
  detectClickOnCountryName();
});
