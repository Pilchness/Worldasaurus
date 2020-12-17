$(document).ready(function () {
  //call jquery functions after page loaded
  // $(document).keypress(function (event) {
  //   var keycode = event.keyCode ? event.keyCode : event.which;
  //   if (keycode == '13') {
  //     $('#countrySearch').val(getListOfPossibleCountries[0]);
  //   }
  // });
  //$('html').keyup(() => countrySearch(getListOfPossibleCountries()));

  // $('#countrySearch').keypress(function (event) {
  //   //enter key has same effect as pressing country identify button
  //   var keycode = event.keyCode ? event.keyCode : event.which;
  //   if (keycode == '13') {
  //     countrySearch($('#countrySearch').val().toLowerCase());
  //   }
  //   event.stopPropagation();
  // });

  $('#country-search').val('').focus(); //resets input box to empty

  // $('#mapstyle').click(function () {
  //   //when change map style button is clicked, change map source
  //   try {
  //     mapsource[$('#mapprovider').val()]();
  //   } catch {
  //     mapsource.stadia();
  //   }
  // });

  // $('#clear').click(function () {
  //   //clears all outlines and resets search box
  //   countryOutlines.clearLayers();
  //   $('#countrySearch').val('');
  //   mapsource.map.setView([51.505, -0.09], 5);
  // });

  // getCurrentNavCords();
});
