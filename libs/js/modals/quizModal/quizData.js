export const getQuizData = () => {
  let currentCorrectScore;
  let currentFailScore;
  let currentPercentage;

  const updateQuestion = (currentCorrectScore, currentFailScore, currentPercentage) => {
    $.ajax({
      type: 'POST',
      url: 'libs/php/quizGenerator.php',
      dataType: 'text',
      data: {
        currentCorrectScore: currentCorrectScore,
        currentFailScore: currentFailScore,
        currentPercentage: currentPercentage
      },
      success: function (response) {
        $('#quiz-body').replaceWith(`<div class="modal-body" id="quiz-body">${response}</div>`);
      },

      error: function (errorThrown) {
        console.log(errorThrown);
      }
    });
  };

  const beginQuiz = () => {
    updateQuestion(0, 0, 0);
    currentCorrectScore = 0;
    currentFailScore = 0;
    currentPercentage = 0;
  };

  beginQuiz();

  $(document).on('click', '#quiz-restart', function () {
    beginQuiz();
  });

  $(document).on('click', '#quiz-1, #quiz-2, #quiz-3, #quiz-4', function (event) {
    currentCorrectScore = parseInt(
      $('#quiz-success')
        .text()
        .replace(/[^\d.-]/g, '')
    );
    currentFailScore = parseInt(
      $('#quiz-fail')
        .text()
        .replace(/[^\d.-]/g, '')
    );

    let questionsAttempted = currentFailScore + currentCorrectScore;

    if (event.target.value === 'true') {
      $(`#${event.target.id}`).css('background-color', '#5cb85c');

      currentCorrectScore++;
      questionsAttempted++;
      $('#quiz-success').text(`Correct: ${currentCorrectScore}`);
    } else {
      $(`#${event.target.id}`).css('background-color', '#f0ad4e');

      currentFailScore++;
      questionsAttempted++;
      $('#quiz-fail').text(`Incorrect: ${currentFailScore}`);
    }
    currentPercentage = Math.round((currentCorrectScore / questionsAttempted) * 100);
    $('#quiz-percentage').text(`Success: ${currentPercentage}%`);

    updateQuestion(currentCorrectScore, currentFailScore, currentPercentage);
  });
};
