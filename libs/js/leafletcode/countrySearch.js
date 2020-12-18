export const getListOfPossibleCountries = (countryList, countryDataArray) => {
  let input = $('#country-search').val().toLowerCase();
  if (input) {
    const regex = new RegExp(`^${input}`);
    let countries = [];
    for (let country in countryList) {
      if (regex.test(countryList[country])) {
        countries.push(countryDataArray[country]);
      }
    }

    return countries;
  } else return [];
};
