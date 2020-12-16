import { hideAll } from '../modals/infoModal/countryData.js';

export const currencyInformation = (currencies, countryName) => {
  console.log('getting currency information');
  $.ajax({
    type: 'POST',
    url: 'libs/php/getCurrencyData.php',
    success: function (response) {
      console.log(response.data);

      let currenciesData = `The main currency of ${countryName} is:\n ${currencies.name}[${
        currencies.symbol
      }] and the current exchange rate (USD) is:\n ${response.data[currencies.code]}`;

      $('#currencies-overlay').html(currenciesData);

      $('#menu-currencies').on('click', function () {
        hideAll();
        $('#currencies-overlay').toggle();
      });
    },

    error: function (errorThrown) {
      console.log(errorThrown);
    }
  });
};
