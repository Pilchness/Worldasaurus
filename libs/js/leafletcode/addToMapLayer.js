import * as mapsource from '../leafletcode/mappingConstants.js';
import * as dataFunction from '../../../data/dataProcessingFunctions.js';

const map = mapsource.map;

export const countryOutline = (country) => {
  mapsource.layer.clearLayers();
  const countryOutline = mapsource.layer.addData(country, { style: {} }).bindTooltip(country.properties.name, {
    permanent: false,
    direction: 'right',
    className: 'country-tooltip'
  });
  map.fitBounds(countryOutline.getBounds());
};

//   const countrycords = country.geometry.coordinates;
//   console.log(countrycords);
//   console.log(country.geometry.type);
//   console.log(countrycords[0]);
//   const countryName = country.properties.name; //.charAt(0).toUpperCase() + country.properties.name.slice(1);
//   if (country.geometry.type === 'Polygon') {
//     //check if the geocords are a single polygon or group of polygons
//     //then use appropriate code to add to map
//     let countryCords = L.polygon(dataFunction.swapLongLat(countrycords[0]), {
//       color: 'blue',
//       id: country.properties.iso_a3
//     });
//     countryOutlines.addLayer(countryCords);
//     //     countryCords
//     //       .bindTooltip(countryName, {
//     //         permanent: false,
//     //         direction: 'right',
//     //         className: 'country-tooltip'
//     //       })
//     //       .addTo(mapsource.map);
//     //     country.on('click', function () {
//     //       //console.log(countriesList[country.options.id]);
//     //       //countryFocus(countryName);
//     //       //$('#currentloc').text(capitalizeCountryName(countriesList[country.options.id]));
//     //       //$('#infoModal').modal('show');
//     //     });
//   } else {
//     try {
//       for (let i = 0; i < countrycords.length; i++) {
//         let countryCords = L.polygon(dataFunction.swapLongLat(countrycords[i][0]), {
//           color: 'blue',
//           id: country.properties.iso_a3
//         });
//         countryOutlines.addLayer(countryCords);
//         country
//           .bindTooltip(countryName, {
//             permanent: false,
//             direction: 'right',
//             className: 'country-tooltip'
//           })
//           .addTo(mapsource.map);
//         country.on('click', function () {
//           //console.log(countriesList[country.options.id]);
//           //countryFocus(countryName);
//           //$('#currentloc').text('Title');
//           // $('#currentloc').text(capitalizeCountryName(countriesList[country.options.id]));
//           //$('#infoModal').modal('show');
//         });
//       }
//     } catch {
//       (error) => console.log(error);
//     }
//   }
//   console.log(countryOutlines);
//   console.log(mapsource.map);
//   countryOutlines.addTo(mapsource.map);

//   //   L.geoJSON(country, {
//   //     style: function (feature) {
//   //       return { color: feature.properties.color };
//   //     }
//   //   })
//   //     .bindPopup(function (layer) {
//   //       return layer.feature.properties.description;
//   //     })
//   //     .addTo(mapsource.featureLayer);
// };
