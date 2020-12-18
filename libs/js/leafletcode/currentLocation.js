import * as mapsource from './mappingConstants.js';

export const getCurrentNavCords = () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      $.ajax({
        type: 'POST',
        url: 'libs/php/getPlaceFromLatLong.php',
        dataType: 'json',
        data: { latitude: position.coords.latitude, longitude: position.coords.longitude },
        success: function (response) {
          if ($('#current-button').val() === 'on' || true) {
            L.marker([position.coords.latitude, position.coords.longitude])
              .bindTooltip(response.data.results[0].formatted, {
                permanent: false,
                direction: 'right',
                className: 'marker-tooltip'
              })
              .addTo(mapsource.map);
          }
          mapsource.map.flyTo([position.coords.latitude, position.coords.longitude], 5);
          return response.data.results[0].formatted;
        },

        error: function (errorThrown) {
          console.log(errorThrown);
        }
      });
    });
  } else {
    alert("Browser doesn't support geolocation!");
  }
};
