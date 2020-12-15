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

const weatherModalContents = `<div class="modal-body" style="padding-top: 0">
<h4 id="modal-title-text">Current Weather Report</h4>
          <div>
            <div id="weather-data" style="margin-right: 5px; width:18em; height: auto">
              <div class="modal-body">
                <table id="city-weather-table">
                 
                </table>
              </div>
            </div>
          </div>
        </div>`;
