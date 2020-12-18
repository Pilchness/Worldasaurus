//import * as mapsource from '../leafletcode/mappingConstants.js';

const closeModals = () => {
  const modalList = ['info', 'map', 'weather', 'quiz'];

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

  // $('#maptype').click(function () {
  //   console.log('options');
  //   $('#map-modal-main').modal('show');
  // });

  // $('#close-map').on('click', function (e) {
  //   console.log('closed');
  //   $('#map-modal-main').delay(500).fadeOut('slow');
  //   setTimeout(function () {
  //     $('#map-modal-main').modal('hide');
  //   }, 1500);
  //   e.stopPropagation();
  // });

  // $('#weather').click(function () {
  //   console.log('options');
  //   $('#weather-modal-main').modal('show');
  // });

  // $('#close-weather').on('click', function (e) {
  //   console.log('closed');
  //   $('#weather-modal-main').delay(500).fadeOut('slow');
  //   setTimeout(function () {
  //     $('#weather-modal-main').modal('hide');
  //   }, 1500);
  //   e.stopPropagation();
  // });

  // $('#quiz').click(function () {
  //   console.log('options');
  //   $('#quiz-modal-main').modal('show');
  // });

  // $('#close-quiz').on('click', function (e) {
  //   console.log('closed');
  //   $('#quiz-modal-main').delay(500).fadeOut('slow');
  //   setTimeout(function () {
  //     $('#quiz-modal-main').modal('hide');
  //   }, 1500);
  //   e.stopPropagation();
  // });

  // $('#settings-modal').on('hidden.bs.modal', function () {
  //   //$('#modal-fader').removeClass('enterSlowlyLeft').addClass('leaveSlowlyLeft');
  //   $('#countrySearch').val('').focus();
  // });

  // $('#settings-modal').on('hidden.bs.modal', function (e) {
  //   $('#modal-fader').removeClass('leaveSlowlyLeft').addClass('enterSlowlyLeft');
  // });

  // $('#info').click(function () {
  //   $('#info-modal').modal('toggle');
  // });

  // $('#quiz').click(function () {
  //   $('#quiz-modal').modal('show');
  // });

  // $('#stadia').click(function () {
  //   console.log('stadia');
  //   stadia();
  // });

  // $('#here').click(function () {
  //   console.log('here');
  //   here();
  // });

  // const jawg = () => {
  //   return L.tileLayer
  //     .provider('Jawg.Streets', {
  //       variant: '',
  //       accessToken: 'YFmp77AAW81RBaq2LhxMCkDSdGniKo085kcxnS9PwVn0TboLUaw3Q21waAn7jTQ5'
  //     })
  //     .addTo(map);
  // };

  // $('#jawg').click(function () {
  //   console.log('jawg');
  //   jawg();
  // });

  // $('#forest').click(function () {
  //   console.log('forest');
  //   forest();
  // });
});
