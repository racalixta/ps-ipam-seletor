let map;

const responseJson = (response) => response.json();

const getCoords = async() => {

  const url = "https://raw.githubusercontent.com/kelvins/Municipios-Brasileiros/main/json/municipios.json"
  const coordsInfos = await fetch(url).then(responseJson);
  // console.log('funca lat ', latlongInfos)
  return coordsInfos;
}

export const parseCoords = async(cityId) => {
  const all = await getCoords();
  // console.log('all ', all)
  all.map((city) => {
    if(city.codigo_ibge === cityId) {
      const infoCity = city
      // console.log('parselatlong-- ', infoCity)
      mapBuild(infoCity.latitude, infoCity.longitude);
    }
  })
}

const mapBuild = (latitude, longitude) => {

  if(map === undefined) {
    map = L.map('map').setView([latitude, longitude], 13);

  } else {
    map.remove();
    map = L.map('map').setView([latitude, longitude], 13);
  }


  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([latitude, longitude]).addTo(map)
      .bindPopup('Você está aqui!')
      .openPopup();

}
