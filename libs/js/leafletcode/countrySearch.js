import * as mapsource from './mappingConstants.js';
import { drawCountryOutline } from './countryOutlines.js';

let outlineColour = 'blue'; //default colour
//let parsedGeoDataArray = [];

export const getListOfPossibleCountries = (countryList) => {
  console.log(countryList);
  //parsedGeoDataArray = geoDataArray;
  let input = $('#country-search').val().toLowerCase();
  if (input) {
    const regex = new RegExp(`^${input}`);
    let countries = [];
    for (let country in countryList) {
      if (regex.test(countryList[country])) {
        countries.push(countryList[country]);
      }
    }
    // if (countries.length === 1) {
    //   $('countrySearch').val(countries[0]);
    //   countryFocus(countries[0]);
    // } else {
    //   outlineColour = 'blue';
    // }
    //displayCountries(countries);
    return countries;
  } else return [];
};

const displayCountries = (countries) => {
  let countryOutlines = L.featureGroup();
  countryOutlines.clearLayers();
  //console.log(parsedGeoDataArray);
  if (countries.length !== parsedGeoDataArray.length) {
    for (let i = 0; i < countries.length; i++) {
      let countryFound = false;
      let countryNumber = null;
      parsedGeoDataArray.foreach((country) => {
        if (parsedGeoDataArray[country] === countries[i]) {
          countryFound = true;
          countryNumber = item;
        }
        if (countryFound) {
          drawCountryOutline(countries, countryNumber);
        } else {
          console.log(`${countries[i]} was not found.`);
        }
      });
      mapsource.map.fitBounds(countryOutlines.getBounds());
    }
  }
};
