export const infoModal = () => {
  return `
      <div class="modal-dialog enterSlowlyLeft animated ml-auto info-modal" role="document">
        <div class="modal-content info-modal">
          <div class="modal-content info-modal">
            <div class="modal-body">
              <br/>
              <div>
                <figure id="info-figure" style="margin-right: 5px; width:18em; height: auto">
                  <figcaption id="country-image-title">Sorry, no image available</figcaption>
                 
                  <div id="parent">
                    <img id="country-image" src="images/defaultcountry.png" alt="default image" width="100%" />
                    <div id="info-overlay"></div>
                  </div>
                </figure>
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
            </div>
          </div>
        </div>
      </div>
    `;
};
