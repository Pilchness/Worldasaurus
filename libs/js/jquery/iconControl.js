const closeModals = () => {
  const modalList = ['reset', 'info', 'map', 'weather', 'quiz'];

  modalList.forEach((modal) => {
    let modalName = `#${modal}-modal-main`;
    if ($(modalName).is(':visible')) {
      $(modalName).delay(500).fadeOut('slow');
      setTimeout(function () {
        $(modalName).modal('hide');
      }, 1500);
    }
  });
};

$(document).ready(function () {
  $('#country-search').val('').focus(); //resets input box to empty

  $('#reset-modal-header, #reset').on('click', function (e) {
    closeModals();
    $('#reset-modal-main').delay(0).fadeOut('slow');
    setTimeout(function () {
      $('#reset-modal-main').modal('toggle');
    }, 300);
    e.stopPropagation();
  });

  $('#info-modal-header, #info').on('click', function (e) {
    closeModals();
    $('#info-modal-main').delay(0).fadeOut('slow');
    setTimeout(function () {
      $('#info-modal-main').modal('toggle');
    }, 300);
    e.stopPropagation();
  });

  $('#map-modal-header, #maptype').on('click', function (e) {
    closeModals();
    $('#map-modal-main').delay(0).fadeOut('slow');
    setTimeout(function () {
      $('#map-modal-main').modal('toggle');
    }, 300);
    e.stopPropagation();
  });

  $('#weather-modal-header, #weather').on('click', function (e) {
    closeModals();
    $('#weather-modal-main').delay(0).fadeOut('slow');
    setTimeout(function () {
      $('#weather-modal-main').modal('toggle');
    }, 300);
    e.stopPropagation();
  });

  $('#quiz-modal-header, #quiz').on('click', function (e) {
    closeModals();
    $('#quiz-modal-main').delay(0).fadeOut('slow');
    setTimeout(function () {
      $('#quiz-modal-main').modal('toggle');
    }, 300);
    e.stopPropagation();
  });
});
