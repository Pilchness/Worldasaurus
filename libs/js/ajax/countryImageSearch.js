export const getCountryImage = (country) => {
  $.ajax({
    url: 'libs/php/getCountryImage.php',
    type: 'POST',
    dataType: 'json',
    data: {
      countryName: country
    },

    success: function (result) {
      if (result.status.name === 'ok') {
        //let randomImage = Math.floor(Math.Rand * 10);
        if (result.data[0]) {
          let src = result.data[0].urls.raw + '&w=235&dpr=2';
          let alt = result.data[0].alt_description;

          $('#country-image').attr('src', src);
          $('#country-image').attr('alt', alt);
          $('#country-image-title').text(alt);
          //$('#currentloc').text(capitalizeCountryName(country));

          //addPhotoSourceInformation(result.data[0]);
        } else {
          $('#country-image').attr('src', 'images/defaultcountry.png');
        }
      }
    },

    error: function (errorThrown) {
      console.log(errorThrown);
    }
  });
};
