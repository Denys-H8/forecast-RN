import { weatherReducer, initialState } from './reducer';
import { getWeatherSuccess, loading, lateNavigation, resetLateNavigation } from './actions';
import { weatherData } from './actions.test';

describe('CitySelection reducer ', () => {
  test('should return the initial state', () => {
    expect(weatherReducer(undefined, { type: 'Undefined value' })).toEqual(initialState);
  });

  test('should handle getWeatherSuccess', () => {
    expect(weatherReducer(undefined, getWeatherSuccess(weatherData))).toEqual({
      ...initialState,
      weather: weatherData.weather,
      weatherStats: weatherData.weatherStats,
    });
  });

  test('should handle loading', () => {
    const value = true;

    expect(weatherReducer(undefined, loading(value))).toEqual({ ...initialState, loading: value });
  });

  test('should handle lateNavigation', () => {
    const routeName = 'Weather';

    expect(weatherReducer(undefined, lateNavigation(routeName))).toEqual({
      ...initialState,
      lateNavigation: routeName,
    });
  });

  test('should handle resetLateNavigation', () => {
    expect(weatherReducer(undefined, resetLateNavigation())).toEqual({
      ...initialState,
      lateNavigation: null,
    });
  });
});
