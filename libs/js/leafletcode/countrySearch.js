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

// let outlineColour = 'blue';

// const drawCountryOutline = (countryData) => {
//   console.log(countryData.geometry);

//   if (countryData.geometry.type === 'Polygon') {
//     //check if the geocords are a single polygon or group of polygons
//     //then use appropriate code to add to map
//     let country = L.polygon(dataFunction.swapLongLat(countryData.geometry.coordinates[0]), {
//       color: outlineColour,
//       id: countryData.iso_a3
//     });

//     console.log(dataFunction.swapLongLat(countryData.geometry.coordinates[0]));
//     countryOutlines.addLayer(country);
//     country
//       .bindTooltip(countryData.properties.name, {
//         permanent: false,
//         direction: 'right',
//         className: 'country-tooltip'
//       })
//       .addTo(mapsource.map);
//     country.on('click', function () {
//       //countryFocus(countryName);
//       $('#infoModal').modal('show');
//     });
//   } else {
//     try {
//       for (let i = 0; i < countryData.geometry.coordinates.length; i++) {
//         let country = L.polygon(dataFunction.swapLongLat(countrycords[i][0]), {
//           color: outlineColour,
//           id: countryNumber
//         });
//         countryOutlines.addLayer(country);
//         country
//           .bindTooltip(countryName, {
//             permanent: false,
//             direction: 'right',
//             className: 'country-tooltip'
//           })
//           .addTo(mapsource.map);
//         country.on('click', function () {
//           countryFocus(countryName);
//           $('#infoModal').modal('show');
//         });
//       }
//     } catch {
//       (error) => console.log(error);
//     }
//   }
//   countryOutlines.addTo(mapsource.map);
// };

// const displayCountries = (countryList, countryDataArray) => {
//   console.log(countryList, countryDataArray);
//   let countryOutlines = L.featureGroup();
//   countryOutlines.clearLayers();
//   if (countryList.length !== countryDataArray.length) {
//     for (let i = 0; i < countryList.length; i++) {
//       for (let j = 0; j < countryDataArray.length; j++) {
//         if (countryList[i] === countryDataArray[j].properties.name.toLowerCase()) {
//           console.log('MATCH');
//           drawCountryOutline(countryDataArray[j]);
//         }
//       }
//     }
//   }
//   mapsource.map.fitBounds(countryOutlines.getBounds());
// };

// //     for (let i = 0; i < countryDataArray.length; i++) {
// //       let countryFound = false;
// //       let countryNumber = null;
// //       for (let country in countryList) {
// //         //console.log('searching:' + countryList[country] + ' ' + countryDataArray[i].properties.name.toLowerCase());
// //         //console.log(countryList[country], countryDataArray[i]);
// //         if (countryList[country] === countryDataArray[i].properties.name) {
// //           countryFound = true;
// //           countryNumber = country;
// //           console.log(countryList[country]);
// //         }
// //         if (countryFound) {
// //           console.log('Country found:' + countryNumber);
// //           drawCountryOutline(countryNumber);
// //         } else {
// //           console.log(countryNumber);
// //           //console.log(`${countryList[i]} was not found.`);
// //         }
// //       }
// //       //mapsource.map.fitBounds(countryOutlines.getBounds());
// //     }
// //   }
// // };
