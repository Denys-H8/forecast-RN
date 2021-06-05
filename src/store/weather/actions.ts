import * as ACTION from './actionTypes';
import { TWeather, TWeatherStats } from './reducer';

export const getWeather = () => ({ type: ACTION.GET_WEATHER });
export const getWeatherSuccess = (weatherData: TWeatherData) => ({
  type: ACTION.GET_WEATHER_SUCCESS,
  payload: weatherData,
});
export const loading = (value: boolean) => ({ type: ACTION.LOADING, payload: value });
export const lateNavigation = (routeName: string | undefined) => ({ type: ACTION.LATE_NAVIGATION, payload: routeName });
export const resetLateNavigation = () => ({ type: ACTION.RESET_LATE_NAVIGATION });

export type TWeatherData = {
  weather: TWeather;
  weatherStats: TWeatherStats;
};
