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
      <button id="arc" class="map-button" style="padding: 5px">
        <img src="images/arcbutton.png" alt="map style 1" />
      </button>
      <button id="stadia" class="map-button" style="padding: 5px">
        <img src="images/stadiabutton.png" alt="map style 2" />
      </button>
      <button id="stamen" class="map-button" style="padding: 5px">
        <img src="images/stamenbutton.png" alt="map style 3" />
      </button>
      <button id="esri" class="map-button" style="padding: 5px">
        <img src="images/esributton.png" alt="map style 4" />
      </button>
       <button id="usgs" class="map-button" style="padding: 5px">
        <img src="images/usgsbutton.png" alt="map style 3" />
      </button>
      <button id="gibs" class="map-button" style="padding: 5px">
        <img src="images/gibsbutton.png" alt="map style 4" />
      </button>
    </div>
  </div>`;
