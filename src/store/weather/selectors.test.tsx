import { loading, lateNavigationSelector, weatherStatsSelector, weatherSelector } from './selectors';
import { TReducer } from 'src/store/rootReducer';

const state = {
  weatherReducer: {
    weather: null,
    weatherStats: null,
    loading: false,
    lateNavigation: undefined,
  },
} as TReducer;

describe('Notification Selectors', () => {
  test('Should return loading', () => {
    expect(loading(state)).toBe(state.weatherReducer.loading);
  });
  test('Should return lateNavigationSelector', () => {
    expect(lateNavigationSelector(state)).toBe(state.weatherReducer.lateNavigation);
  });
  test('Should return weatherStatsSelector', () => {
    expect(weatherStatsSelector(state)).toBe(state.weatherReducer.weatherStats);
  });
  test('Should return weatherSelector', () => {
    expect(weatherSelector(state)).toBe(state.weatherReducer.weather);
  });
});
