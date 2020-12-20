import { closeIcon } from '../modalcomponents/icons.js';

export const resetModal = () => {
  return `<div class="modal-dialog enterSlowlyLeft animated ml-auto reset-modal" role="document">
      <div class="modal-content reset-modal">
        <div id="reset-modal-header" class="reset-modal">
          <button
            id="close-reset"
            style="padding: 10px; margin-right: 0px"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            ${closeIcon}
          </button>
        </div>
   ${resetModalContents}
      </div>
    </div>`;
};

const resetModalContents = `<div class="modal-body" style="padding-top: 0; text-align: center">
    <div id="reset-button-container">
      <button id="reset-all" class="reset-button">
        Reset All
      </button>
      <button id="reset-country" class="reset-button">
        Reset Country
      </button>
    </div>
  </div>`;
