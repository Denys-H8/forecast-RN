import { TReducer } from 'src/store/rootReducer';

export const data = (state: TReducer) => state.cityReducer.data;
export const query = (state: TReducer) => state.cityReducer.query;
export const usedCities = (state: TReducer) => state.cityReducer.usedCities;
export const weatherData = (state: TReducer) => state.cityReducer.weatherData;
export const isLoadingSelector = (state: TReducer) => state.cityReducer.isLoading;
export const citySelector = (state: TReducer) => state.cityReducer.city;
