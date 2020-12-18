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
        if (result.data[0]) {
          let src = result.data[0].urls.raw + '&w=235&dpr=2';
          let alt = result.data[0].alt_description;

          $('#country-image').attr('src', src);
          $('#country-image').attr('alt', alt);
          $('#country-image-title').text(alt);
          $('#info-overlay').text('');
          const data = result.data[0];

          let photographerInfo = `<ul>`;
          if (data.user.name) {
            photographerInfo += `<li>Photographer: ${data.user.name}</li>`;
          }
          if (data.user.portfolio_url) {
            photographerInfo += `<li style="font-size: 0.6em">Portfolio: 
            <a href="${data.user.portfolio_url}" target="_blank">${data.user.portfolio_url}</a></li>`;
          }
          if (data.user.location) {
            photographerInfo += `<li>Home Location: ${data.user.location}</li>`;
          }
          if (data.user.twitter_username) {
            photographerInfo += `<li>Twitter Name: ${data.user.twitter_username}</li>`;
          }
          if (data.user.bio) {
            if (data.user.bio.length > 10) {
              photographerInfo += `<li style="font-size: 0.6em">Bio: ${data.user.bio}</li>`;
            }
          }
          if (data.user.created_at) {
            photographerInfo += `<li>Created: ${new Date(data.created_at).toString().slice(4, 15)}</li>`;
          }
          if (data.user.likes) {
            photographerInfo += `<li>Number of Likes: ${data.likes}</li>`;
          }

          photographerInfo += `</ul>`;

          $('#photographer-overlay').html(photographerInfo);
          $('#menu-photographer').on('click', function () {
            hideAll('photographer');
            $('#photographer-overlay').toggle();
          });

          const extraPhotos = () => {
            const photos = result.data.slice(1, 10);
            let photoDisplayCode = '';
            photos.forEach((photo) => {
              photoDisplayCode += `<img id=${photo.id} class="gallery-photo" src='${photo.urls.raw}&w=50&dpr=2' alt='${photo.alt_description} width: '33%' height: 'auto'; style="padding: 5px; opacity: 1">`;
            });
            return `<div id="photos-gallery">` + photoDisplayCode + `</div>`;
          };

          const photosOverlayCode = extraPhotos();
          $('#photos-overlay').html(photosOverlayCode);

          $('#menu-photos').on('click', function () {
            hideAll('photos');
            $('#photos-overlay').toggle();
          });

          $('.gallery-photo').hover(
            function () {
              let photoId = $(this).attr('id');
              $(`#${photoId}`).css('opacity', '0.5');
            },
            function () {
              let photoId = $(this).attr('id');
              $(`#${photoId}`).css('opacity', '1');
            }
          );

          $('.gallery-photo').on('click', function () {
            let photoId = $(this).attr('id');
            result.data.slice(1, 10).forEach((photoData) => {
              if (photoData.id === photoId) {
                hideAll();
                $('#country-image').attr('src', photoData.urls.raw);
                $('#country-image').attr('alt', photoData.alt_description);
                $('#country-image-title').text(photoData.alt_description);

                let data = photoData;

                photographerInfo = `<ul>`;
                if (data.user.name) {
                  photographerInfo += `<li>Photographer: ${data.user.name}</li>`;
                }
                if (data.user.portfolio_url) {
                  photographerInfo += `<li style="font-size: 0.6em">Portfolio: 
                  <a href="${data.user.portfolio_url}" target="_blank">${data.user.portfolio_url}</a></li>`;
                }
                if (data.user.location) {
                  photographerInfo += `<li>Home Location: ${data.user.location}</li>`;
                }
                if (data.user.twitter_username) {
                  photographerInfo += `<li>Twitter Name: ${data.user.twitter_username}</li>`;
                }
                if (data.user.bio) {
                  if (data.user.bio.length > 10) {
                    photographerInfo += `<li style="font-size: 0.6em">Bio: ${data.user.bio}</li>`;
                  }
                }
                if (data.user.created_at) {
                  photographerInfo += `<li>Created: ${new Date(data.created_at).toString().slice(4, 15)}</li>`;
                }
                if (data.user.likes) {
                  photographerInfo += `<li>Number of Likes: ${data.likes}</li>`;
                }

                photographerInfo += `</ul>`;

                $('#photographer-overlay').html(photographerInfo);
              }
            });
          });
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
