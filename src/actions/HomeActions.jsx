import { getCities, getUfs, parseUfs, parseCities, parseCityInfo, getCityInfos } from "../helpers/api";

export const FETCH_UFS = 'FETCH_UFS';
export const FETCH_CITIES = 'FETCH_CITIES';
export const FETCH_CITY_INFO = 'FETCH_CITY_INFO';
export const SET_SELECTED_UF = 'SET_SELECTED_UF';

export const fetchUfs = () => {
  const payload = getUfs().then(parseUfs);
  
  return {
    type: FETCH_UFS,
    payload,
  }

}

export const fetchCities = (uf) => {
  const payload = getCities(uf).then(parseCities);

  return {
    type: FETCH_CITIES,
    payload,
  }
}

export const setSelectedUf = (uf) => {
  const payload = uf;
  return {
    type: SET_SELECTED_UF,
    payload
  }
}

export const fetchCityInfo = (city) => {
  const payload = getCityInfos(city).then(parseCityInfo);
 
  return {
    type: FETCH_CITY_INFO,
    payload
  }
}

