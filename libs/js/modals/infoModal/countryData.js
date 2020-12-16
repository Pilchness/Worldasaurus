//import * as mapsource from './mapsources.js';
import { currencyInformation } from '../../ajax/getCurrencyInfo.js';

export const hideAll = () => {
  $('#facts-overlay').hide();
  $('#photographer-overlay').hide();
  $('#timezones-overlay').hide();
  $('#currencies-overlay').hide();
  $('#borders-overlay').hide();
  $('#languages-overlay').hide();
  $('#pois-overlay').hide();
};

export const getCountryData = (ISOcode) => {
  console.log(ISOcode);
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

  const handleCountryData = (countryData) => {
    //console.log(countryData);
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

    console.log(currencies);
    currencyInformation(currencies[0], countryName);

    let factsData = `
             <ul>
               <li>Population: ${population}</li>
               <li>Area: ${area} km²</li>
               <li>Region: ${region}</li>
               <li>Sub Region: ${subregion}</li>
               <li>Gini Rating: ${giniRating}</li>
             </ul>
           `;

    $('#facts-overlay').html(factsData);

    $('#menu-facts').on('click', function () {
      hideAll();
      $('#facts-overlay').toggle();
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
      hideAll();
      $('#timezones-overlay').toggle();

      let bordersData = `
             <ul>
               <li>Borders: ${population}</li>
               <li>Area: ${area} km²</li>
               <li>Region: ${region}</li>
               <li>Sub Region: ${subregion}</li>
               <li>Gini Rating: ${giniRating}</li>
             </ul>
           `;

      $('#borders-overlay').html(bordersData);

      $('#menu-borders').on('click', function () {
        hideAll();
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
        hideAll();
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
        hideAll();
        $('#pois-overlay').toggle();
      });
    });
  };
};
//             let bordersInfo = `<figure id="figure-border-overlay" style="display: none; background-color: rgba(63, 127, 191, 0.7);
//       margin-top: 39px; margin-left:20px; padding: 5px; width:354px; height: 231px; color: white; position: absolute; top: 0; left: 0;">

// ${
//   borders.length === 0
//     ? `<p>${countryName} has borders with no other countries.</p>`
//     : borders.length > 1
//     ? `<p>${countryName} has borders with ${borders.length} other countries: </p>${decodedBordersCode.slice(
//         0,
//         decodedBordersCode.length - 2
//       )}`
//     : `<p>${countryName} only has a border with ${decodedBordersArray[0]}.</p></figure>`
// }`;

//             $('#menu-facts').on('click', function () {
//               $('#info-overlay').html(facts);
//               $('#country-image-title').css({ color: 'transparent', transition: 'color 2s' });
//               $('#figure-facts-overlay').fadeIn(3000, function () {
//                 $('#info-menu-background').on('click', function () {
//                   $('#figure-facts-overlay').fadeOut(3000, function () {});
//                 });
//               });
//             });

//             $('#menu-borders').on('click', function () {
//               $('#info-overlay').html(bordersInfo);
//               $('#country-image-title').css({ color: 'transparent', transition: 'color 2s' });
//               $('#figure-border-overlay').fadeIn(3000, function () {});
//             });
//           }
//         },
//         error: function (errorThrown) {
//           console.log(errorThrown);
//         }
//       });
//     };

//     getISOCountryNames();

//     // specify popup options
//   };
// };

//let decodedBordersCode = '';
//let decodedBordersArray = [];

// const getISOCountryNames = () => {
//   let country = '';
//   $.ajax({
//     type: 'POST',
//     url: 'libs/php/geodataDecode.php',
//     dataType: 'json',
//     data: { action: 'all' },
//     success: function (response) {
//       //console.log(response.geoData.features);
//       let countryData = response.geoData.features;
//       console.log(countryData[15]);
//       for (let j = 0; j < borders.length; j++) {
//         for (let i = 0; i < countryData.length; i++) {
//           //console.log(countryData[i].properties.iso_a3, borders[j]);
//           if (countryData[i].properties.iso_a3 === borders[j]) {
//             country =
//               countryData[i].properties.name.charAt(0).toUpperCase() + countryData[i].properties.name.slice(1);
//             decodedBordersArray.push(country);
//             //console.log(country);
//           }
//         }
//       }
//       console.log(decodedBordersArray);
//       if (decodedBordersArray.length > 0) {
//         decodedBordersArray.map((country) => {
//           decodedBordersCode += `${country}, `;
//         });
//console.log(decodedBordersCode);
//             L.marker([latitude, longitude])
//               .addTo(mapsource.map)
//               .bindPopup(
//                 `<b><h3>${countryName}</h3></b><br/><img src=${flagLink} alt=${
//                   countryName + ' flag'
//                 } width=100px /><p>${countryName} is a country of population ${population}, located in ${subregion}. It has an area of ${area}km² and its capital is ${capital}.
// </p>`,
//                 { className: 'leaflet-pop' }
//               )
//               .openPopup();
//$('#selected-country').text(countryName);
//   $('#place-info').html(`
//       <div>
//         <ul>
//           <li>Population: ${population}</li>
//           <li>Area: ${area} km²</li>
//           <li>Region: ${region}</li>
//           <li>Sub Region: ${subregion}</li>
//           <li>Timezones</li>
//           <li>Currencies</li>
//           <li>Borders</li>
//           <li>Languages</li>
//         </ul>
//       </div>`)
