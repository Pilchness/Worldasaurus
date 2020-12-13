let outlineColour = 'blue'; //default colour

const getListOfPossibleCountries = () => {
  let input = $('#countrySearch').val();
  const regex = new RegExp(`^${input}`);
  let countries = [];
  for (let country in countriesList) {
    if (regex.test(countriesList[country])) {
      countries.push(countriesList[country]);
    }
  }
  if (countries.length === 1) {
    $('countrySearch').val(countries[0]);
    countryFocus(countries[0]);
  } else {
    outlineColour = 'blue';
  }
  return countries;
};

const countrySearch = (countries) => {
  countryOutlines.clearLayers();

  if (countries.length !== Object.keys(countriesList).length) {
    for (let i = 0; i < countries.length; i++) {
      let countryFound = false;
      let countryNumber = null;
      for (let item in countriesList) {
        if (countriesList[item] === countries[i]) {
          countryFound = true;
          countryNumber = item;
        }
      }
      if (countryFound) {
        drawCountryOutline(countryNumber, countries[i]);
      } else {
        console.log(`${countries[i]} was not found.`);
      }
    }
    mapsource.map.fitBounds(countryOutlines.getBounds());
  }
};
