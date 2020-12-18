<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <!-- JQuery UI CSS -->
    <link
          rel="stylesheet"
          href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css"
          />
    <!-- Bootstrap CSS -->
    <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
          />
    <!-- Leaflet CSS -->
    <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
          />
    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="libs/css/loaderstyles.css" />
    <link rel="stylesheet" type="text/css" href="libs/css/globalstyles.css" />
    <link rel="stylesheet" type="text/css" href="libs/css/modalstyles.css" />

    <title>Worldasaurus
    </title>
    <link rel="shortcut icon" href="/favicon.ico" />

  </head>
  <body>
    <script id="functions">const setInputVal = (data) => $('#country-search').val(data);
    </script>
    <div id="preloader">
    </div>
    <div id="mapid">
    </div>
    <div id="content">
    </div>

    <!-- JQuery Script -->
    <script type="application/javascript" src="libs/js/jquery/jqueryv3.5.1.js">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js">
    </script>
      <script type="module" src="libs/js//jquery/iconControl.js">
    </script>


    <!-- Custom Script -->
     <script type="application/javascript" src="libs/js/components/loaderscript.js">
    </script>
    
     <script type="module" src="libs/js/missionControl.js">
    </script>
    
     <script type="module" src="libs/js/leafletcode/mappingConstants.js">
    </script> 
    
    <!-- Leaflet Scripts -->
    <script
            src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossorigin=""
            >
    </script>

    <!-- Bootstrap Script -->
    <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
            crossorigin="anonymous"
            >
    </script>

    <!-- Modals -->
   <script type="module" src="libs/js/modals/modalControl.js">
    </script>
        <div class="modal info-modal" id="info-modal-main" tabindex="-1" role="dialog" aria-hidden="true"><div id="info-modal-content"></div></div>
        <div class="modal map-modal" id="map-modal-main" tabindex="-1" role="dialog" aria-hidden="true"><div id="map-modal-content"></div></div>
        <div class="modal weather-modal" id="weather-modal-main" tabindex="-1" role="dialog" aria-hidden="true"><div id="weather-modal-content"></div></div>
        <div class="modal quiz-modal" id="quiz-modal-main" tabindex="-1" role="dialog" aria-hidden="true"><div id="quiz-modal-content"></div></div>
  </body>
</html>