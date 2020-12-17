//import * as mapsource from './mapsources.js';
import { currencyInformation } from '../../ajax/getCurrencyInfo.js';
import { locateIcon } from '../../ajax/getWeatherData.js';
import { countryCodeLookup, detectClickOnCountryName } from '../../missionControl.js';
import * as mapsource from '../../leafletcode/mappingConstants.js';

export const hideAll = (overlay) => {
  if (overlay != 'facts') {
    $('#facts-overlay').hide();
  }
  if (overlay != 'photographer') $('#photographer-overlay').hide();
  if (overlay != 'photos') $('#photos-overlay').hide();
  if (overlay != 'timezones') $('#timezones-overlay').hide();
  if (overlay != 'currencies') $('#currencies-overlay').hide();
  if (overlay != 'borders') $('#borders-overlay').hide();
  if (overlay != 'languages') $('#languages-overlay').hide();
  if (overlay != 'pois') $('#pois-overlay').hide();
};

export const getCountryData = (ISOcode) => {
  const countryCodes = countryCodeLookup();

  const handleCountryData = (countryData) => {
    console.log(countryData);
    const countryName = countryData.data.name;
    const flagLink = countryData.data.flag;
    const population = countryData.data.population;
    const borders = countryData.data.borders;
    const capital = countryData.data.capital;
    const currencies = countryData.data.currencies;
    const languages = countryData.data.languages;
    const region = countryData.data.region;
    const timezones = countryData.data.timezones;
    const subregion = countryData.data.subregion;
    const giniRating = countryData.data.gini;
    const area = countryData.data.area;
    //const latitude = countryData.data.latlng[0];
    //const longitude = countryData.data.latlng[1];

    console.log(languages);
    currencyInformation(currencies[0], countryName);
    $('#flag-container').html(`<img width='80px' height='50px' src='${flagLink}' alt='${countryName} flag'/>`);

    // let bordersDecoded = () => {
    //   let bordersString = '';
    //   borders.forEach((border) => {
    //     fetchCountryData(border).then((countryData) => {
    //       bordersString += countryData + ', ';
    //     });
    //   });
    //   return bordersString;
    // };

    $.ajax({
      url: 'libs/php/getLatLongFromPlacename.php',
      type: 'POST',
      dataType: 'json',
      data: {
        city: capital.replace(/ /g, '%20')
      },

      success: function (result) {
        console.log(result.data.results[0].geometry);
        let id = result.data.results[0].components.postcode;

        let factsData = `
             <ul>
               <li>Population: ${population}</li>
               <li>Area: ${area} km²</li>
               <li>Region: ${region}</li>
                 <li>Capital City: ${capital} ${locateIcon(id)}</li>
               <li>Sub Region: ${subregion}</li>
               <li>Gini Rating: ${giniRating}</li>
             </ul>
           `;

        $('#facts-overlay').html(factsData);

        $('#menu-facts').on('click', function () {
          console.log('menu facts');
          hideAll('facts');
          $('#facts-overlay').toggle();
        });

        $(`#${id}`).hover(
          function () {
            $(`#${id}`).attr('fill', 'rgba(70, 51, 155, 0.9)');
          },
          function () {
            $(`#${id}`).attr('fill', 'white');
          }
        );

        $(`#${id}`).on('click', function () {
          let cityName = result.data.results[0].components.city;
          let lat = result.data.results[0].geometry.lat;
          let long = result.data.results[0].geometry.lng;
          L.marker([lat, long])
            .bindTooltip(cityName, {
              permanent: true,
              direction: 'right',
              sticky: true,
              offset: [10, 0],
              opacity: 0.75,
              className: 'capital-city-tooltip'
            })
            .addTo(mapsource.map);
        });
      },
      error: function (errorThrown) {
        console.log(errorThrown);
      }
    });

    let timezonesData = () => {
      let introSentence =
        timezones.length > 1
          ? `<p>${countryName} has the following timezones:</p>`
          : `<p>${countryName} has the following timezone:</p>`;

      return (
        introSentence +
        `${timezones.map((timezone) => {
          return ` ${timezone}`;
        })}`
      );
    };

    $('#timezones-overlay').html(timezonesData);

    $('#menu-timezones').on('click', function () {
      hideAll('timezones');
      $('#timezones-overlay').toggle();

      // const newCountry = (countryName) => {
      //   console.log(countryName);
      //   $('#country-search').val(countryName);
      // };

      let bordersData = () => {
        console.log('getting borders');
        let listOfBorderCountries = '';
        for (let i = 0; i < borders.length; i++) {
          if (countryCodes[borders[i]]) {
            listOfBorderCountries += `<button class="border-button" onClick={$('#country-search').val('${
              countryCodes[borders[i]]
            }')}>${countryCodes[borders[i]]}</button>`;
          }
        }
        // listOfBorderCountries =
        //   listOfBorderCountries.slice(0, -1) +
        //   `<span> and </span><button class="border-button">${
        //     countryCodes[borders[borders.length - 1]]
        //   }</button><span>.</span>`;

        let bordersText = '';
        borders.length === 0
          ? (bordersText = `<p>${countryName} has borders with no other countries.</p>`)
          : borders.length > 1
          ? (bordersText = `<p>${countryName} has borders with ${borders.length} other countries: </p>${listOfBorderCountries}`)
          : (bordersText = `<p>${countryName} only has a border with: <button class="border-button" onClick={$('#country-search').val('${
              countryCodes[borders[0]]
            }')}>${countryCodes[borders[0]]}</button></p>`);
        return bordersText;
      };

      $('#borders-overlay').html(bordersData());
      detectClickOnCountryName('.border-button');

      $('#menu-borders').on('click', function () {
        hideAll('borders');
        $('#borders-overlay').toggle();
      });

      let languagesData = () => {
        let introSentence =
          languages.length > 1
            ? `<p>The official languages of ${countryName} are:</p>`
            : `<p>The official language of ${countryName} is:</p>`;

        return (
          introSentence +
          `${languages.map((language) => {
            return ` ${language.name}`;
          })}`
        );
      };

      $('#languages-overlay').html(languagesData);

      $('#menu-languages').on('click', function () {
        hideAll('languages');
        $('#languages-overlay').toggle();
      });

      let poisData = `
             <ul>
               <li>POIs: ${population}</li>
               <li>Area: ${area} km²</li>
               <li>Region: ${region}</li>
               <li>Sub Region: ${subregion}</li>
               <li>Gini Rating: ${giniRating}</li>
             </ul>
           `;

      $('#pois-overlay').html(poisData);

      $('#menu-pois').on('click', function () {
        hideAll('pois');
        $('#pois-overlay').toggle();
      });
    });
  };

  $.ajax({
    type: 'POST',
    url: 'libs/php/getCountryFlagData.php',
    dataType: 'json',
    data: { code: ISOcode },
    success: function (response) {
      console.log(response);
      handleCountryData(response);
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    }
  });
};
