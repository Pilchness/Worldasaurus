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
    <link rel="stylesheet" type="text/css" href="libs/css/leafletstyles.css" />
    <link rel="stylesheet" type="text/css" href="libs/css/globalstyles.css" />
    <title>Worldasaurus
    </title>
  </head>
  <body>
    <script id="functions">const setInputVal = (data) => $('#country-search').val(data.innerText)</script>
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
     <!-- <script type="text/javascript" src="libs/js/jquery/jQueryInitial.js">
    </script> -->
    <!-- Custom Script -->
     <script type="application/javascript" src="libs/js/components/loaderscript.js">
    </script>
    
     <script type="module" src="libs/js/missionControl.js">
    </script>
    <script type="module" src="data/dataControl.js">
    </script>
     <script type="module" src="libs/js/leafletcode/mappingConstants.js">
    </script> 
    <script type="module" src="libs/js/leafletcode/currentLocation.js">
    </script>
    
   
    <!-- <script type="module" src="libs/js/mapscript.js">
    </script>
    <script type="module" src="libs/js/iconControl.js">
    </script>
    <script type="module" src="libs/js/optionButtons.js">
    </script>
    <script type="module" src="libs/js/quiz.js">
    </script>
    <script type="module" src="libs/js/topTens.js">
    </script> -->


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
  </body>
</html>
