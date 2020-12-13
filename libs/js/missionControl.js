import * as mapsource from './leafletcode/mappingConstants.js';
import { getCurrentNavCords } from './leafletcode/currentLocation.js';
import { drawCountryOutline } from './leafletcode/countryOutlines.js';
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
let countryOutlines = L.featureGroup();
const currentLocation = getCurrentNavCords();

$('#content').html(pageHeader).append(leftMenu);
let geoData; //parsed geoData JSON array of countries and data
let countryList; //list of country names

const generateCountryList = (geodata) => {
  geoData = geodata;
  //create object of countries from geodata
  let countries = {};
  for (let i = 0; i < geodata.length; i++) {
    countries[i] = geodata[i].properties.name.toLowerCase();
  }
  countryList = countries;
};

decodeGeodata().then((geodata) => generateCountryList(geodata));

drawCountryOutline(countryArray, countryNumber);
