import { hideAll } from '../modals/infoModal/countryData.js';

export const currencyInformation = (currencies, countryName) => {
  console.log('getting currency information');
  $.ajax({
    type: 'POST',
    url: 'libs/php/getCurrencyData.php',
    success: function (response) {
      let currenciesData = `<p>The main currency of ${countryName} is the
       ${currencies.name}[${currencies.symbol}] and the current exchange rate (USD) is
        ${response.data[currencies.code]}</p><p>To convert ${
        currencies.name
      } into US dollars, enter an amount below.</p>
         <div id="currency-container"><div id="search-box">
          <div style="vertical-align: top">
            <input
              id="currency-exchange"
              spellcheck="false"
              class="form-control mr-sm-2"
              type="number"
              aria-label="Number"
            />
          </div ><p style="font-size: 10px">Enter amount of ${currencies.symbol} to convert.</p></div>
          <div style="padding-left: 10px"><span style="font-size: 18px">is $<span id="conversion"></span></span></div>
          <script>$('#currency-exchange').change(function () {
  $('#conversion').text(
    (
      Math.round(($('#currency-exchange').val() / ${
        response.data[currencies.code]
      }) * Math.pow(10, 2)) / Math.pow(10, 2)
    ).toFixed(2)
  );
})</script>`;

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
