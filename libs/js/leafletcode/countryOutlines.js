// import * as mapsource from './mappingConstants.js';
// import * as dataFunction from '../../../data/dataProcessingFunctions.js';
// let outlineColour = 'blue';

// export const drawCountryOutline = (countryData, countryOutlines) => {
//   console.log(countryData.geometry);

//   if (countryData.geometry.type === 'Polygon') {
//     //check if the geocords are a single polygon or group of polygons
//     //then use appropriate code to add to map
//     let country = L.polygon(dataFunction.swapLongLat(countryData.geometry.coordinates[0]), {
//       color: outlineColour,
//       id: countryData.iso_a3
//     });
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
