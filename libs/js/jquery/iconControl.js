//import * as mapsource from '../leafletcode/mappingConstants.js';

$(document).ready(function () {
  console.log('icons ready');

  $('#options').click(function () {
    console.log('options');
    $('#optionsModal').modal('toggle');
  });

  $('#info').click(function () {
    console.log('info');
    $('#infoModal').modal('toggle');
  });

  $('#maptype').click(function () {
    console.log('maptype');
    $('#maptypeModal').modal('toggle');
  });

  $('#weather').click(function () {
    console.log('weather');
    $('#weatherModal').modal('toggle');
  });

  $('#quiz').click(function () {
    console.log('quiz');
    $('#quizModal').modal('toggle');
  });

  // $('#optionsModal').on('hidden.bs.modal', function () {
  //   //$('#modal-fader').removeClass('enterSlowlyLeft').addClass('leaveSlowlyLeft');
  //   $('#countrySearch').val('').focus();
  // });

  // $('#optionsModal').on('hidden.bs.modal', function (e) {
  //   $('#modal-fader').removeClass('leaveSlowlyLeft').addClass('enterSlowlyLeft');
  // });

  // $('#info').click(function () {
  //   console.log('info');
  //   $('#infoModal').modal('toggle');
  // });

  // $('#quiz').click(function () {
  //   console.log('quiz');
  //   $('#quizModal').modal('show');
  // });

  // $('#stadia').click(function () {
  //   console.log('stadia');
  //   mapsource.stadia();
  // });

  // $('#here').click(function () {
  //   console.log('here');
  //   mapsource.here();
  // });

  // $('#jawg').click(function () {
  //   console.log('jawg');
  //   mapsource.jawg();
  // });

  // $('#forest').click(function () {
  //   console.log('forest');
  //   mapsource.forest();
  // });
});
