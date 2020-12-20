//Leaflet Map Initiate
import { getCurrentNavCords } from './currentLocation.js';

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

$(document).ready(function () {
  $('#reset-all').on('click', function () {
    getCurrentNavCords();
    $('#country-search').val('');
    map.removeLayer(layer);
  });
});

const removeLayers = () => {
  map.eachLayer(function (layer) {
    if (layer instanceof L.tileLayer) map.removeLayer(layer);
  });
};

const arc = () => {
  removeLayers();
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }).addTo(map);
};

const stadia = () => {
  removeLayers();
  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(map);
};

const carto = () => {
  removeLayers();
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);
};

const esri = () => {
  removeLayers();
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: US National Park Service',
    maxZoom: 8
  }).addTo(map);
};

const usgs = () => {
  removeLayers();
  L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 20,
    attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
  }).addTo(map);
};

const gibs = () => {
  removeLayers();
  L.tileLayer(
    'https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}',
    {
      attribution:
        'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
      bounds: [
        [-85.0511287776, -179.999999975],
        [85.0511287776, 179.999999975]
      ],
      minZoom: 1,
      maxZoom: 8,
      format: 'jpg',
      time: '',
      tilematrixset: 'GoogleMapsCompatible_Level'
    }
  ).addTo(map);
};

arc(); //load default map
$(document).ready(function () {
  $('#arc').on('click', function () {
    arc();
  });
  $('#stadia').on('click', function () {
    stadia();
  });
  $('#carto').on('click', function () {
    carto();
  });
  $('#esri').on('click', function () {
    esri();
  });
  $('#usgs').on('click', function () {
    usgs();
  });
  $('#gibs').on('click', function () {
    gibs();
  });
});
