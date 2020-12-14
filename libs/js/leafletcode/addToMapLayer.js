import * as mapsource from '../leafletcode/mappingConstants.js';

const map = mapsource.map;

export const addCountryOutline = (country, tooltipHTML) => {
  mapsource.layer.clearLayers();
  const countryOutline = mapsource.layer.addData(country, { style: {} }).bindTooltip(tooltipHTML, {
    permanent: true,
    direction: 'right',
    className: 'country-tooltip'
  });
  // map.flyTo(countryOutline.getBounds(), 14, {
  //   animate: true,
  //   duration: 1.5
  // });
  map.flyToBounds(countryOutline.getBounds(), 14, {
    animate: true,
    duration: 3
  });
};
