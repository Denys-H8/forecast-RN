import { TReducer } from 'src/store/rootReducer';

export const loading = (state: TReducer) => state.weatherReducer.loading;
export const lateNavigationSelector = (state: TReducer) => state.weatherReducer.lateNavigation;
export const weatherStatsSelector = (state: TReducer) => state.weatherReducer.weatherStats;
export const weatherSelector = (state: TReducer) => state.weatherReducer.weather;
