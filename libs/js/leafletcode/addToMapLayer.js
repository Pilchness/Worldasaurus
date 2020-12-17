import * as mapsource from '../leafletcode/mappingConstants.js';
import { POIdata } from '../ajax/getPOIdata.js';

const map = mapsource.map;

export const addCountryOutline = (country) => {
  mapsource.layer.clearLayers();
  //console.log(country.properties);

  //console.log(country.geometry.coordinates[0][0]);

  // let NW = `${toString(boundaries._southWest.lng) + toString(boundaries._northEast.lat)}`;
  // let NE = `${toString(boundaries._northEast.lng) + toString(boundaries._northEast.lat)}`;
  // let SE = `${toString(boundaries._northEast.lng) + toString(boundaries._southWest.lat)}`;
  // let SW = `${toString(boundaries._southWest.lng) + toString(boundaries._southWest.lat)}`;
  // const boundaryString = NW + NE + SE + SW + NW;
  // console.log(boundaryString);
  // let coordinatesRaw = country.geometry.coordinates[0][0];
  // let coordinateString = '';
  // coordinatesRaw.forEach((coordinate) => {
  //   coordinateString += `${coordinate[0]},`;
  //   coordinateString += `${coordinate[1]},`;
  // });
  // console.log(coordinateString.slice(0, -1));

  const countryOutline = mapsource.layer
    .addData(country, { style: { color: '#ff0000', weight: 50, opacity: 0.65 } })
    .on('click', function () {
      //console.log(country);
    });
  // .bindTooltip(tooltipHTML, {
  //   permanent: true,
  //   direction: 'right',
  //   className: 'country-tooltip'
  // });
  // map.flyTo(countryOutline.getBounds(), 14, {
  //   animate: true,
  //   duration: 1.5
  // });
  map.flyToBounds(countryOutline.getBounds(), 14, {
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
  POIdata(radius, code, origin);
};
