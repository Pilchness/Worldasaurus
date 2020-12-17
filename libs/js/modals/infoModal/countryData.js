//import * as mapsource from './mapsources.js';
import { currencyInformation } from '../../ajax/getCurrencyInfo.js';
import { locateIcon } from '../../ajax/getWeatherData.js';
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
  const getCountryName = (ISOcode) => {
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

  getCountryName(ISOcode);

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
    const latitude = countryData.data.latlng[0];
    const longitude = countryData.data.latlng[1];

    //console.log(currencies);
    currencyInformation(currencies[0], countryName);

    //getCountryName(borders[0]);

    // let bordersDecoded = () => {
    //   const getCountryName = (ISOcode) => {
    //     $.ajax({
    //       type: 'POST',
    //       url: 'libs/php/getCountryFlagData.php',
    //       dataType: 'json',
    //       data: { code: ISOcode },
    //       success: function (response) {
    //         console.log(response);
    //         handleCountryData(response);
    //       },
    //       error: function (errorThrown) {
    //         console.log(errorThrown);
    //       }
    //     });
    //   };
    //   let bordersString = '';
    //   borders.forEach((border) => {
    //     getCountryName(border).then((countryData) => {
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

      let bordersData = () => {
        let bordersText = '';
        borders.length === 0
          ? (bordersText = `<p>${countryName} has borders with no other countries.</p>`)
          : borders.length > 1
          ? (bordersText = `<p>${countryName} has borders with ${borders.length} other countries: </p>${borders}`)
          : (bordersText = `<p>${countryName} only has a border with ${borders[0]}.</p></figure>`);
        return bordersText;
      };

      $('#borders-overlay').html(bordersData());

      $('#menu-borders').on('click', function () {
        hideAll('borders');
        $('#borders-overlay').toggle();
      });

      let languagesData = `
             <ul>
               <li>Languages: ${population}</li>
               <li>Area: ${area} km²</li>
               <li>Region: ${region}</li>
               <li>Sub Region: ${subregion}</li>
               <li>Gini Rating: ${giniRating}</li>
             </ul>
           `;

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
};
