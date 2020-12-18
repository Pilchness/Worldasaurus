import { closeIcon } from '../modalcomponents/icons.js';
import { getQuizData } from './quizData.js';

export const quizModal = () => {
  return `<div class="modal-dialog enterSlowlyLeft animated ml-auto quiz-modal" role="document">
      <div class="modal-content quiz-modal">
        <div id="quiz-modal-header" class="quiz-modal">
          <div id="flag-container"></div>
          <button
            id="close-quiz"
            style="padding: 10px; margin-right: 0px"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            ${closeIcon}
          </button>
        </div>
        ${quizModalContents}
      </div>
    </div>`;
};

const quizModalContents = `<div class="modal-body" style="padding-top: 0; color: white">
<h4 style="padding-left: 1rem">Countries Quiz</h4>
          <div id="quiz-body">${getQuizData()}</div>
        </div>`;
