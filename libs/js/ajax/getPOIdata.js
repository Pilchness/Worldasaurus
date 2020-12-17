import * as mapsource from '../leafletcode/mappingConstants.js';

export const POIdata = (radius, POIcode, origin) => {
  $.ajax({
    type: 'GET',
    url: 'libs/php/getMapquestPOIdata.php',
    dataType: 'json',
    data: { radius: radius, code: POIcode, origin: origin },
    success: function (response) {
      console.log(response);
      if (response.data.searchResults) {
        for (let i = 0; i < 1; i++) {
          let lat = response.data.searchResults[i].shapePoints[0];
          let lng = response.data.searchResults[i].shapePoints[1];
          let name = response.data.searchResults[i].name;

          L.marker([lat, lng])
            .bindTooltip(name, {
              permanent: true,
              direction: 'auto',
              className: 'marker-tooltip'
            })
            .addTo(mapsource.map);
        }
      }
    },

    error: function (errorThrown) {
      console.log(errorThrown);
    }
  });
};
