//import * as mapsource from '../leafletcode/mappingConstants.js';

$(document).ready(function () {
  console.log('icons ready');

  $('#settings').click(function () {
    console.log('options');
    $('#settings-modal-main').modal('show');
  });

  $('#close-settings').on('click', function (e) {
    console.log('closed');
    $('#settings-modal-main').delay(500).fadeOut('slow');
    setTimeout(function () {
      $('#settings-modal-main').modal('hide');
    }, 1500);
    e.stopPropagation();
  });

  $('#info').click(function () {
    console.log('options');
    $('#info-modal-main').modal('show');
  });

  $('#info-modal-header').on('click', function (e) {
    console.log('closed');
    $('#info-modal-main').delay(200).fadeOut('slow');
    setTimeout(function () {
      $('#info-modal-main').modal('hide');
    }, 1500);
    e.stopPropagation();
  });

  $('#maptype').click(function () {
    console.log('options');
    $('#map-modal-main').modal('show');
  });

  $('#close-map').on('click', function (e) {
    console.log('closed');
    $('#map-modal-main').delay(500).fadeOut('slow');
    setTimeout(function () {
      $('#map-modal-main').modal('hide');
    }, 1500);
    e.stopPropagation();
  });

  $('#weather').click(function () {
    console.log('options');
    $('#weather-modal-main').modal('show');
  });

  $('#close-weather').on('click', function (e) {
    console.log('closed');
    $('#weather-modal-main').delay(500).fadeOut('slow');
    setTimeout(function () {
      $('#weather-modal-main').modal('hide');
    }, 1500);
    e.stopPropagation();
  });

  $('#quiz').click(function () {
    console.log('options');
    $('#quiz-modal-main').modal('show');
  });

  $('#close-quiz').on('click', function (e) {
    console.log('closed');
    $('#quiz-modal-main').delay(500).fadeOut('slow');
    setTimeout(function () {
      $('#quiz-modal-main').modal('hide');
    }, 1500);
    e.stopPropagation();
  });

  $('#settings-modal').on('hidden.bs.modal', function () {
    //$('#modal-fader').removeClass('enterSlowlyLeft').addClass('leaveSlowlyLeft');
    $('#countrySearch').val('').focus();
  });

  $('#settings-modal').on('hidden.bs.modal', function (e) {
    $('#modal-fader').removeClass('leaveSlowlyLeft').addClass('enterSlowlyLeft');
  });

  $('#info').click(function () {
    console.log('info');
    $('#info-modal').modal('toggle');
  });

  $('#quiz').click(function () {
    console.log('quiz');
    $('#quiz-modal').modal('show');
  });

  $('#stadia').click(function () {
    console.log('stadia');
    mapsource.stadia();
  });

  $('#here').click(function () {
    console.log('here');
    mapsource.here();
  });

  $('#jawg').click(function () {
    console.log('jawg');
    mapsource.jawg();
  });

  $('#forest').click(function () {
    console.log('forest');
    mapsource.forest();
  });
});
