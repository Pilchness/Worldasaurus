export const weatherModal = () => {
  return `
  <div class="modal-dialog enterSlowlyLeft animated ml-auto info-modal" role="document">
    <div class="modal-content info-modal">
      <div class="modal-content info-modal">
      <div style="text-align: right;">
          <button id="close-weather" style="padding: 10px" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span  aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
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
          </div>
          <div class="modal-body" style="padding-top: 0">
<h4 style="padding-left: 1rem">Current Weather Report</h4>
          <div>
            <div id="weather-data" style="margin-right: 5px; width:18em; height: auto">
              <div class="modal-body">
                <table id="city-weather-table">
                  <tr>
                    <th>F/c</th>
                    <th style="width: 60px">City</th>
                    <th>Wind</th>
                    <th style="width: 10px">Temp(°C)</th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};
