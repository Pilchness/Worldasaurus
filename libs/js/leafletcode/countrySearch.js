export const getListOfPossibleCountries = (countryList, countryDataArray) => {
  //console.log(countryList, countryDataArray);
  let input = $('#country-search').val().toLowerCase();
  //console.log(input);
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
