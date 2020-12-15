import { closeIcon } from '../modalcomponents/icons.js';

export const infoModal = () => {
  return `<div class="modal-dialog enterSlowlyLeft animated ml-auto info-modal" role="document">
      <div class="modal-content info-modal">
        <div id="info-modal-header" class="info-modal">
          <button
            id="close-info"
            style="padding: 10px; margin-right: 0px"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            ${closeIcon}
          </button>
        </div>
   ${infoModalContents}
      </div>
    </div>`;
};

const infoModalContents = `     <div class="modal-body">
          <figure id="info-figure">
            <figcaption id="country-image-title">Sorry, no image available</figcaption>

            <div id="country-image-parent">
              <img id="country-image" src="images/defaultcountry.png" alt="default image" />
              <div id="info-overlay">
                Please search for a country to see a photograph of the country here and to be able to access further
                information about it.
              </div>
            </div>
          </figure>
          <div id="info-button-container">
            <button id="menu-facts" class="info-button-select options-modal">
              Facts
            </button>
            <button id="menu-photographer" class="info-button-select options-modal">
              Photographer
            </button>
            <button id="menu-next" class="info-button-select options-modal">
              Next Photo
            </button>
            <button id="menu-timezones" class="info-button-select options-modal">
              Timezones
            </button>
            <button id="menu-currencies" class="info-button-select options-modal">
              Currencies
            </button>
            <button id="menu-borders" class="info-button-select options-modal">
              Borders
            </button>
            <button id="menu-languages" class="info-button-select options-modal">
              Languages
            </button>
            <button id="menu-pois" class="info-button-select options-modal">
              POIs
            </button>
          </div>
        </div>`;
