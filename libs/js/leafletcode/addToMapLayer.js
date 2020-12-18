import * as mapsource from '../leafletcode/mappingConstants.js';
import { POIdata } from '../ajax/getPOIdata.js';

const map = mapsource.map;

export const addCountryOutline = (country) => {
  mapsource.layer.clearLayers();

  const countryOutline = mapsource.layer
    .addData(country, { style: { color: '#ff0000', weight: 50, opacity: 0.65 } })
    .on('click', function () {});

  const countryBounds = countryOutline.getBounds();

  map.flyToBounds(countryBounds, 14, {
    animate: true,
    duration: 3
  });

  const boundaries = countryOutline.getBounds();
  let code = 841211; //for testing - not used in php file
  //codes: train stations 401190, airports 458106, national monuments 841211, tourist attractions 999333
  let longitudeCentre = (boundaries._northEast.lng + boundaries._southWest.lng) / 2;
  let latitudeCentre = (boundaries._northEast.lat + boundaries._southWest.lat) / 2;
  let origin = latitudeCentre + ',' + longitudeCentre;
  let radius = 3000;
  POIdata(radius, code, origin, countryBounds);
};
