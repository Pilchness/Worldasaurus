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

const mapModalContents = `<div class="modal-body" style="padding-top: 0; text-align: center">
<h4>Choose a map style</h4>
    <div id="map-button-container">
      <button id="arc" class="map-button">
        <img src="images/arcbutton.png" alt="map style 1" class="contain"/>
      </button>
      <button id="stadia" class="map-button">
        <img src="images/stadiabutton.png" alt="map style 2" class="contain"/>
      </button>
      <button id="carto" class="map-button">
        <img src="images/cartobutton.png" alt="map style 3" class="contain"/>
      </button>
      <button id="esri" class="map-button">
        <img src="images/esributton.png" alt="map style 4" class="contain"/>
      </button>
       <button id="usgs" class="map-button">
        <img src="images/usgsbutton.png" alt="map style 3" class="contain"/>
      </button>
      <button id="gibs" class="map-button">
        <img src="images/gibsbutton.png" alt="map style 4" class="contain"/>
      </button>
    </div>
  </div>`;
