import * as mapsource from '../leafletcode/mappingConstants.js';

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
