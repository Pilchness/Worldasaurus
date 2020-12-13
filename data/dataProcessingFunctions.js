export const swapLongLat = (coordArray) => {
  //swap longitute and latitude as leaflet/geodata are in opposite order
  return coordArray.map((longLatArray) => {
    return [longLatArray[1], longLatArray[0]];
  });
};

export const capitalizeCountryName = (name) => {
  let separateWord = name.toLowerCase().split(' ');
  for (let i = 0; i < separateWord.length; i++) {
    separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(' ');
};
