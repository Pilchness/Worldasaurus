import { closeIcon } from '../modalcomponents/icons.js';

export const weatherModal = () => {
  return `<div class="modal-dialog enterSlowlyLeft animated ml-auto weather-modal" role="document">
      <div class="modal-content weather-modal">
        <div id="weather-modal-header" class="weather-modal">
          <button
            id="close-weather"
            style="padding: 10px; margin-right: 0px"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            ${closeIcon}
          </button>
        </div>
   ${weatherModalContents}
      </div>
    </div>`;
};

const weatherModalContents = `<div class="modal-body" style="padding-top: 0; color: white">
<h4 style="padding-left: 1rem">Current Weather Report</h4>
          <div style="width: 100%, background-color: red">
            <div id="weather-data" style="margin-right: 5px; width:100%; height: 100%">
              <div style="margin-right: 20px">
                <table id="city-weather-table">
                <colgroup>
    <col style="width:10%">
    <col style="width:50%">
    <col style="width:20%">
     <col style="width:20%">
  </colgroup>  
                  <tr>
                    <th style="column-width: 20px"></th>
                    <th style="column-width: 80px">City</th>
                    <th style="column-width: 50px">Wind</th>
                    <th style="column-width: 50px">Temp(°C)</th>
                    <th style="column-width: 20px"></th>
                  </tr>
                  <div id="weather-warning">Weather data will appear here when you have searched for a country.</div>
                </table>
              </div>
            </div>
          </div>
        </div>`;
