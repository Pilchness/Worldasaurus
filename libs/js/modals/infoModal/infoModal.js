export const infoModal = () => {
  return `
      <div class="modal-dialog enterSlowlyLeft animated ml-auto info-modal" role="document">
    <div class="modal-content info-modal">
      <div class="modal-content info-modal">
      <div style="text-align: right;">
                 <button id="close-map" style="padding: 10px;" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span  aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                class="bi bi-x-square"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </button>
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
