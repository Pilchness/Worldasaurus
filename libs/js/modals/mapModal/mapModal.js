import { closeIcon } from '../modalcomponents/icons.js';

export const mapModal = () => {
  return `<div class="modal-dialog enterSlowlyLeft animated ml-auto map-modal" role="document">
      <div class="modal-content map-modal">
        <div id="map-modal-header" class="map-modal">
          <button
            id="close-map"
            style="padding: 10px; margin-right: 0px"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            ${closeIcon}
          </button>
        </div>
   ${mapModalContents}
      </div>
    </div>`;
};

const mapModalContents = `<div class="modal-body" style="padding-top: 0">
    <div style="display: flex; align-items: center; justify-content: space-around; margin: auto; flex-wrap: wrap">
      <button id="stadia" class="map-button" style="padding: 5px">
        <img src="images/smapthumb.png" alt="map style 1" />
      </button>
      <button id="here" class="map-button" style="padding: 5px">
        <img src="images/hmapthumb.png" alt="map style 2" />
      </button>
      <button id="jawg" class="map-button" style="padding: 5px">
        <img src="images/jmapthumb.png" alt="map style 3" />
      </button>
      <button id="forest" class="map-button" style="padding: 5px">
        <img src="images/fmapthumb.png" alt="map style 4" />
      </button>
    </div>
  </div>`;
