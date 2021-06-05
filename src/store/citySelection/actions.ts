import * as ACTION from './actionTypes';
import { TGroupWeather, TData, TCity } from './reducer';

export const queryChanged = (query: string, data: TData[]) => ({
  type: ACTION.QUERY_CHANGED,
  payload: { query, data },
});
export const getWeatherForCities = () => ({ type: ACTION.GET_WEATHER_FOR_CITIES });
export const getWeatherForCitiesSucess = (data: TGroupWeather) => ({
  type: ACTION.GET_WEATHER_FOR_CITIES_SUCESS,
  payload: data,
});
export const resetQuery = () => ({ type: ACTION.RESET_QUERY });
export const changeCity = (city: TCity) => ({
  type: ACTION.CHANGE_CITY,
  payload: city,
});
export const pressedCity = (city: TCity) => ({
  type: ACTION.PRESSED_CITY,
  payload: city,
});
export const setLoading = (value: boolean) => ({ type: ACTION.SET_LOADING, payload: value });
