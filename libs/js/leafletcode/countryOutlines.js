import * as mapsource from './mappingConstants.js';

export const drawCountryOutline = (countryArray, countryNumber) => {
  console.log(countryArray[countryNumber]);

  const countrycords = countryArray[countryNumber].geometry.coordinates;
  let countryName = countryArray[countryNumber].name;
  countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);
  if (countryArray[countryNum].geometry.type === 'Polygon') {
    //check if the geocords are a single polygon or group of polygons
    //then use appropriate code to add to map
    let country = L.polygon(swapLongLat(countrycords[0]), { color: outlineColour, id: countryNumber });
    countryOutlines.addLayer(country);
    country
      .bindTooltip(countryName, {
        permanent: false,
        direction: 'right',
        className: 'country-tooltip'
      })
      .addTo(mapsource.map);
    country.on('click', function () {
      //countryFocus(countryName);
      $('#infoModal').modal('show');
    });
  } else {
    try {
      for (let i = 0; i < countrycords.length; i++) {
        let country = L.polygon(swapLongLat(countrycords[i][0]), { color: outlineColour, id: countryNumber });
        countryOutlines.addLayer(country);
        country
          .bindTooltip(countryName, {
            permanent: false,
            direction: 'right',
            className: 'country-tooltip'
          })
          .addTo(mapsource.map);
        country.on('click', function () {
          countryFocus(countryName);
          $('#infoModal').modal('show');
        });
      }
    } catch {
      (error) => console.log(error);
    }
  }
  countryOutlines.addTo(mapsource.map);
};
