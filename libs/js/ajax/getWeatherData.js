import * as mapsource from '../leafletcode/mappingConstants.js';
const map = mapsource.map;

export const getCities = (countryCode) => {
  $.ajax({
    type: 'POST',
    url: 'libs/php/cityWeatherDecode.php',
    data: { action: 'test' },
    dataType: 'json',
    success: function (response) {
      let weatherCities = response.cityWeatherData;
      let matchingCities = [];
      weatherCities.forEach((cityDataObject) => {
        if (cityDataObject.country === countryCode) {
          matchingCities.push(cityDataObject.id);
        }
      });
      getWeatherData(matchingCities);
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    }
  });
};

export const locateIcon = (id) => {
  return `<svg
            id=${id}
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            class="bi bi-geo-alt locate-city-icon"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
            />
            <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>`;
};

export const getWeatherData = (cityArray) => {
  const generateCityCodeString = () => {
    let cityCodeString = cityArray[0];
    for (let i = 1; i < 10; i++) {
      let randomCity = Math.floor(Math.random() * cityArray.length);
      cityCodeString = cityCodeString + ',' + cityArray[randomCity];
    }
    return cityCodeString;
  };

  $.ajax({
    url: 'libs/php/getCityWeather.php',
    type: 'POST',
    dataType: 'json',
    data: {
      cities: generateCityCodeString()
    },

    success: function (result) {
      if (result.status.name === 'ok') {
        const cityData = result.data;
        let cityWeatherTable = '';
        cityData.map((data) => {
          cityWeatherTable += `<tr><td>${chooseWeatherSymbol(data.weather[0].description)}</td><td class="table-city">${
            data.name
          }</td><td>${data.wind.speed}</td><td>${Math.round(
            data.main.temp - 273.15 //need to convert temp from K to C
          )}</td><td class="locate-city" value=${data.id} lat=${data.coord.lat} long=${data.coord.lon} name=${
            data.name
          }>${locateIcon(data.id)}</td></tr>`;
        });

        $('#city-weather-table').find('tr:gt(0)').remove();
        $('#weather-warning').remove();
        $(cityWeatherTable).appendTo('#city-weather-table tbody');
        $('.locate-city').hover(
          function () {
            let cityId = $(this).attr('value');
            $(`#${cityId}`).attr('fill', 'rgba(70, 51, 155, 0.9)');
          },
          function () {
            let cityId = $(this).attr('value');
            $(`#${cityId}`).attr('fill', 'white');
          }
        );

        let currentMarker;

        $('.locate-city').on('click', function () {
          let cityName = $(this).attr('name');
          let lat = $(this).attr('lat');
          let long = $(this).attr('long');
          if (currentMarker != undefined) {
            map.removeLayer(currentMarker);
          }
          currentMarker = L.marker([lat, long])
            .bindTooltip(cityName, {
              permanent: true,
              direction: 'right',
              sticky: true,
              offset: [10, 0],
              opacity: 0.75,
              className: 'city-tooltip'
            })
            .addTo(map);
        });
      }
    },

    error: function (errorThrown) {
      console.log(errorThrown);
    }
  });
};

export const handleWeatherData = (country) => {
  getCities(country.properties.iso_a2);
};

const weatherIcons = {
  overcastcloud: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
</svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
  <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
  <path fill-rule="evenodd" d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/>
</svg>`,
  brokencloud: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
</svg>`,
  heavyrain: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 1.616-2.58 1.907-2.87l-.708-.708z"/>
</svg>`,
  lightrain: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-half" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
</svg>`,
  clearsky: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM6.5 6.497V6.5h-1c0-.568.447-.947.862-1.154C6.807 5.123 7.387 5 8 5s1.193.123 1.638.346c.415.207.862.586.862 1.154h-1v-.003l-.003-.01a.213.213 0 0 0-.036-.053.86.86 0 0 0-.27-.194C8.91 6.1 8.49 6 8 6c-.491 0-.912.1-1.19.24a.86.86 0 0 0-.271.194.213.213 0 0 0-.036.054l-.003.01z"/>
  <path d="M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM9 5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-2-2V5z"/>
</svg>`,
  thunder: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
</svg>`
};

const chooseWeatherSymbol = (weatherDescription) => {
  if (weatherDescription.search('sun') >= 0) {
    return weatherIcons.sun;
  }
  if (weatherDescription.search('clear') >= 0) {
    return weatherIcons.clearsky;
  }
  if (weatherDescription.search('broken') >= 0) {
    return weatherIcons.brokencloud;
  }
  if (weatherDescription.search('overcast') >= 0) {
    return weatherIcons.overcastcloud;
  }
  if (weatherDescription.search('clouds') >= 0) {
    return weatherIcons.brokencloud;
  }
  if (weatherDescription.search('light') >= 0) {
    return weatherIcons.lightrain;
  }
  if (weatherDescription.search('rain') >= 0) {
    return weatherIcons.heavyrain;
  }
  if (weatherDescription.search('thunder') >= 0) {
    return weatherIcons.thunder;
  }
  return weatherIcons.clearsky;
};
