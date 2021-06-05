import { data, query, usedCities, weatherData, isLoadingSelector, citySelector } from './selectors';
import { TReducer } from 'src/store/rootReducer';

const state = {
  cityReducer: {
    city: {
      id: 706483,
      name: 'Kharkiv',
      lat: 49.988358,
      lon: 36.232845,
    },
    usedCities: [
      {
        id: 706483,
        name: 'Kharkiv',
        lon: 36.25,
        lat: 50.0,
      },
    ],
    query: '',
    data: [],
    weatherData: null,
    isLoading: false,
  },
} as TReducer;

describe('CitySelection Selectors', () => {
  test('Should return data', () => {
    expect(data(state)).toBe(state.cityReducer.data);
  });
  test('Should return query', () => {
    expect(query(state)).toBe(state.cityReducer.query);
  });
  test('Should return usedCities', () => {
    expect(usedCities(state)).toBe(state.cityReducer.usedCities);
  });
  test('Should return weatherData', () => {
    expect(weatherData(state)).toBe(state.cityReducer.weatherData);
  });
  test('Should return isLoadingSelector', () => {
    expect(isLoadingSelector(state)).toBe(state.cityReducer.isLoading);
  });
  test('Should return city', () => {
    expect(citySelector(state)).toBe(state.cityReducer.city);
  });
});
