const addPhotoSourceInformation = (data) => {
  let photographer = `<div id="figure-photographer-overlay" style="width: 300px; display: none; background-color: rgba(63, 127, 191, 0.7); color: white">
             <ul>
               <li>Photographer: ${data.user.name}</li>
               <li>Portfolio: ${data.user.portfolio_url}</li>
               <li>Home Location: ${data.user.locatio}</li>
               <li>Twitter Name: ${data.user.twitter_username}</li>
               <li style="font-size: 0.6em">Bio: ${data.user.bio}</li>
                <li>Created: ${new Date(data.created_at).toString().slice(4, 15)}</li>
                 <li>Number of Likes: ${data.likes}</li>
             </ul>
           </figure>`;

  $('#menu-photographer').on('click', function () {
    $('#info-overlay').html(photographer);
    $('#country-image-title').css({ color: 'transparent', transition: 'color 2s' });
    $('#figure-photographer-overlay').fadeIn(3000, function () {
      $('#info-menu-background').on('click', function () {
        $('#figure-photographer-overlay').fadeOut(3000, function () {});
      });
    });
  });
};
