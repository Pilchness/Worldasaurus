import { hideAll } from '../modals/infoModal/countryData.js';

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
          $('#info-overlay').text('');
          const data = result.data[0];

          let photographerInfo = `
             <ul>
               <li>Photographer: ${data.user.name}</li>
               <li>Portfolio: ${data.user.portfolio_url}</li>
               <li>Home Location: ${data.user.locatio}</li>
               <li>Twitter Name: ${data.user.twitter_username}</li>
               <li style="font-size: 0.6em">Bio: ${data.user.bio}</li>
                <li>Created: ${new Date(data.created_at).toString().slice(4, 15)}</li>
                 <li>Number of Likes: ${data.likes}</li>
             </ul>
           `;

          $('#photographer-overlay').html(photographerInfo);
          $('#menu-photographer').on('click', function () {
            hideAll();
            $('#photographer-overlay').toggle();
          });
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
