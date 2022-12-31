import { FETCH_UFS, FETCH_CITIES, SET_SELECTED_UF, FETCH_CITY_INFO } from '../actions/HomeActions';

const INITIAL_STATE = {
  ufs: [],
  cities: [],
  selectedUf: null,
  cityInfo: [],
}

export function HomeReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_UFS:
      return { ...state, ufs: payload }

    case FETCH_CITIES:
      return { ...state, cities: payload }

    case FETCH_CITY_INFO:
      return {...state, cityInfo: payload}

    case SET_SELECTED_UF:
      return {...state, selectedUf: payload}
  
    default:
      return state;
  }

}






