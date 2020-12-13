export async function decodeGeodata() {
  let geodata;
  try {
    geodata = await $.ajax({
      type: 'POST',
      url: 'libs/php/geodataDecode.php',
      dataType: 'json',
      data: { action: 'all' }
    });
    return geodata.geoData.features;
  } catch (error) {
    console.error(error);
  }
}
