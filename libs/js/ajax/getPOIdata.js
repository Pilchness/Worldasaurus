import * as mapsource from '../leafletcode/mappingConstants.js';
import { locateIcon } from './getWeatherData.js';
import { poiOverlay } from '../modals/infoModal/poiOverlay.js';

const map = mapsource.map;

export const POIdata = (radius, POIcode, origin, countryBounds) => {
  $.ajax({
    type: 'GET',
    url: 'libs/php/getMapquestPOIdata.php',
    dataType: 'json',
    data: { radius: radius, code: POIcode, origin: origin },
    success: function (response) {
      $('#pois-overlay').html(poiOverlay());

      if (response.data.searchResults) {
        const poiData = response.data.searchResults;
        let poiTable = '';
        poiData.map((data) => {
          poiTable += `<tr>
          <td>${choosePOISymbol(data.fields.group_sic_code)}</td>
          <td class="table-pois">${data.name}</td>
          <td class="locate-poi" value=${data.fields.id} lat=${data.fields.lat} long=${data.fields.lng} name='${
            data.name
          }'>${locateIcon(data.fields.id)}</td></tr>`;
        });

        $('#menu-pois').on('click', function () {});
        $('#poi-warning').remove();

        $(poiTable).appendTo('#poi-data-table tbody');

        $('.locate-poi').hover(
          function () {
            let locId = $(this).attr('value');
            $(`#${locId}`).attr('fill', 'rgba(70, 51, 155, 0.9)');
          },
          function () {
            let locId = $(this).attr('value');
            $(`#${locId}`).attr('fill', 'white');
          }
        );

        let currentMarker;
        $('.locate-poi').on('click', function () {
          let poiName = $(this)
            .attr('name')
            .slice(0, 20)
            .normalize('NFD')
            .replace(/'/g, '\x27')
            .replace(/[\u0300-\u036f]/g, '');

          let lat = $(this).attr('lat');
          let long = $(this).attr('long');
          if (currentMarker != undefined) {
            map.removeLayer(currentMarker);
          }
          currentMarker = L.marker([lat, long])
            .bindTooltip(poiName, {
              permanent: true,
              direction: 'right',
              sticky: true,
              offset: [10, 0],
              opacity: 0.75,
              className: 'poi-tooltip'
            })
            .on('click', function (e) {
              map.setView([e.latlng.lat, e.latlng.lng], 15, {
                animate: true,
                duration: 3
              });
            })
            .addTo(map);

          map.flyTo([lat, long], map.getZoom(), {
            animate: true,
            duration: 3
          });
        });
      }
    },

    error: function (errorThrown) {
      console.log(errorThrown);
    }
  });
};

const poiIcons = {
  shop: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
</svg>`,
  tourist: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-signpost-split" viewBox="0 0 16 16">
  <path d="M7 16h2V6H8V2h1v-.586a1 1 0 0 0-2 0V7h1v4H7v5z"/>
  <path fill-rule="evenodd" d="M14 3H8v2h6l.75-1L14 3zM8 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H8zM2 8h6v2H2l-.75-1L2 8zm6-1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h6z"/>
</svg>`,
  building: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
  <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
</svg>`,
  flag: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flag" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/>
</svg>`,
  diy: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hammer" viewBox="0 0 16 16">
  <path d="M9.812 1.952a.5.5 0 0 1-.312.89c-1.671 0-2.852.596-3.616 1.185L4.857 5.073V6.21a.5.5 0 0 1-.146.354L3.425 7.853a.5.5 0 0 1-.708 0L.146 5.274a.5.5 0 0 1 0-.706l1.286-1.29a.5.5 0 0 1 .354-.146H2.84C4.505 1.228 6.216.862 7.557 1.04a5.009 5.009 0 0 1 2.077.782l.178.129z"/>
  <path fill-rule="evenodd" d="M6.012 3.5a.5.5 0 0 1 .359.165l9.146 8.646A.5.5 0 0 1 15.5 13L14 14.5a.5.5 0 0 1-.756-.056L4.598 5.297a.5.5 0 0 1 .048-.65l1-1a.5.5 0 0 1 .366-.147z"/>
</svg>`,
  maritime: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-life-preserver" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14.43 10.772l-2.788-1.115a4.015 4.015 0 0 1-1.985 1.985l1.115 2.788a7.025 7.025 0 0 0 3.658-3.658zM5.228 14.43l1.115-2.788a4.015 4.015 0 0 1-1.985-1.985L1.57 10.772a7.025 7.025 0 0 0 3.658 3.658zm9.202-9.202a7.025 7.025 0 0 0-3.658-3.658L9.657 4.358a4.015 4.015 0 0 1 1.985 1.985l2.788-1.115zm-8.087-.87L5.228 1.57A7.025 7.025 0 0 0 1.57 5.228l2.788 1.115a4.015 4.015 0 0 1 1.985-1.985zM8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>`,
  business: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"/>
  <path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"/>
</svg>`,
  transport: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>`,
  agriculture: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268zM9 4a1 1 0 0 0-2 0 1.473 1.473 0 0 0 .045.206c.039.131.1.294.183.483.166.378.396.808.637 1.223l.135.23.135-.23c.241-.415.47-.845.637-1.223.083-.19.144-.352.183-.484.02-.065.031-.116.038-.154C9 4.018 9 4.002 9 4zM3.67 5.5a1 1 0 0 0 .366 1.366 1.47 1.47 0 0 0 .2.064c.134.032.305.06.51.083.411.045.898.061 1.379.06.09 0 .178 0 .266-.002a21.82 21.82 0 0 0-.131-.232 12.88 12.88 0 0 0-.742-1.163 4.215 4.215 0 0 0-.327-.4 1.472 1.472 0 0 0-.115-.11c-.025-.022-.038-.03-.04-.032A1 1 0 0 0 3.67 5.5zm1.366 5.366a1 1 0 0 1-1-1.732c.001 0 .016-.008.047-.02.037-.013.087-.028.153-.044.134-.032.305-.06.51-.083a12.88 12.88 0 0 1 1.379-.06c.09 0 .178 0 .266.002a21.82 21.82 0 0 1-.131.232c-.24.416-.497.83-.742 1.163a4.1 4.1 0 0 1-.327.4 1.483 1.483 0 0 1-.155.142zM9 12a1 1 0 0 1-2 0 1.476 1.476 0 0 1 .045-.206c.039-.131.1-.294.183-.483.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223.083.19.144.352.183.484A1.338 1.338 0 0 1 9 12zm3.33-6.5a1 1 0 0 1-.366 1.366 1.478 1.478 0 0 1-.2.064c-.134.032-.305.06-.51.083-.412.045-.898.061-1.379.06-.09 0-.178 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4.1 4.1 0 0 1 .327-.4c.046-.05.085-.086.114-.11.026-.022.04-.03.041-.032a1 1 0 0 1 1.366.366zm-1.366 5.366a1 1 0 0 0 1-1.732c-.002 0-.016-.008-.047-.02a1.478 1.478 0 0 0-.153-.044 4.217 4.217 0 0 0-.51-.083 12.881 12.881 0 0 0-1.379-.06c-.09 0-.178 0-.266.002a22 22 0 0 0 .131.232c.24.416.497.83.742 1.163.122.167.232.3.327.4a1.494 1.494 0 0 0 .155.142zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>`
};

const choosePOISymbol = (poiCategory) => {
  poiCategory = parseInt(poiCategory);
  const shops = [531102, 531104, 533101, 541101, 541103, 541105, 543102, 564103, 571216];
  const tourist = [472401, 472402, 581226, 701101, 841201, 841211, 842201, 999319];
  const buildings = [152130, 154235, 651303, 651401];
  const flag = [799290];
  const diy = [521138, 523107, 525104, 526104];
  const maritime = [449306, 449903];
  const business = [149901, 551102, 738999];
  const transport = [401190, 411101, 411902, 411914, 451201, 458106];
  const agriculture = [13901, 19101, 75203, 97106];

  if (shops.includes(poiCategory)) {
    return poiIcons.shop;
  } else if (tourist.includes(poiCategory)) {
    return poiIcons.tourist;
  } else if (buildings.includes(poiCategory)) {
    return poiIcons.building;
  } else if (flag.includes(poiCategory)) {
    return poiIcons.flag;
  } else if (diy.includes(poiCategory)) {
    return poiIcons.diy;
  } else if (maritime.includes(poiCategory)) {
    return poiIcons.maritime;
  } else if (business.includes(poiCategory)) {
    return poiIcons.business;
  } else if (transport.includes(poiCategory)) {
    return poiIcons.transport;
  } else if (agriculture.includes(poiCategory)) {
    return poiIcons.agriculture;
  } else return poiIcons.flag;
};
