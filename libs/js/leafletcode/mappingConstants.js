//Leaflet Map Initiate

export const map = L.map('mapid', {
  zoomControl: false,
  scrollWheelZoom: false,
  dragging: true,
  doubleClickZoom: false,
  boxZoom: false,
  rendere: L.canvas,
  touchZoom: false
}).setView([51.505, -0.09], 5);

export const layer = L.geoJSON().addTo(map);

// map.on('click', function (e) {
//   alert('Lat, Lon : ' + e.latlng.lat + ', ' + e.latlng.lng);
// });
// const geojsonFeature = {}
// L.geoJSON(geojsonFeature).addTo(map);
// export const geoJSONLayer = () => {
//   return new L.geoJSON().addTo(map);
// };

// L.geoJSON(country, {
//   color: 'green',
//   weight: 14,
//   opacity: 1,
//   fillOpacity: 0.0
// }).addTo(mapsource.map);
//Leaflet Map Providers

export const here = () => {
  return L.tileLayer
    .provider('HEREv3.terrainDay', {
      apiKey: 'HvkPdvSs-fo46BuqakUsfDTOtZcehw8PAZf7wX4KmXI'
    })
    .addTo(map);
};

export const stadia = () => {
  return L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org">OpenMapTiles</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);
};

export const jawg = () => {
  return L.tileLayer
    .provider('Jawg.Streets', {
      variant: '',
      accessToken: 'YFmp77AAW81RBaq2LhxMCkDSdGniKo085kcxnS9PwVn0TboLUaw3Q21waAn7jTQ5'
    })
    .addTo(map);
};

export const forest = () => {
  return L.tileLayer.provider('Thunderforest.Landscape', { apikey: '6edf007c572b46c88e5016bfe349c3bc' }).addTo(map);
};

export const arc = () => {
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map);
};

$(document).ready(function () {
  $('#here').on('click', function () {
    console.log('here');
    here();
  });
});
