import watchWeatherCitiesAsync, { pressedCityAsync, getWeatherAsync } from './fetchWeather';
import { runSaga } from 'redux-saga';
import { pressedCity, changeCity, getWeatherForCities } from '../actions';
import { GET_WEATHER_FOR_CITIES, PRESSED_CITY } from '../actionTypes';
import { data, query, usedCities } from '../selectors';
import { temperatureScale } from '../../settings/selectors';
import { getWeather } from '../../weather/actions';
import { put, select, takeEvery } from '@redux-saga/core/effects';
import { rootNavigation } from 'src/services';
import { TGroupWeather } from '../reducer';
import { itemMock } from 'src/screens/citySelection/components/cityCard/CityCard.test';

describe('watchWeatherCitiesAsync ', () => {
  const gen = watchWeatherCitiesAsync();

  test('should wait for every GET_WEATHER_FOR_CITIES and call getWeatherAsync', () => {
    expect(gen.next().value).toEqual(takeEvery(GET_WEATHER_FOR_CITIES, getWeatherAsync));
  });

  test('should wait for every PRESSED_CITY and call pressedCityAsync', () => {
    expect(gen.next().value).toEqual(takeEvery(PRESSED_CITY, pressedCityAsync));
  });

  test('should be done on next iteration', () => {
    expect(gen.next().done).toBeTruthy();
  });
});

describe('pressedCityAsync ', () => {
  const city = {
    id: 14253,
    name: 'city',
    lat: 10102536,
    lon: 10102536,
  };

  test('should put 2 actions', () => {
    const dispatched: any = [];

    runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      pressedCityAsync,
      pressedCity(city),
    );

    expect(dispatched).toEqual([changeCity(city), getWeather()]);
  });

  test('should put 2 actions and then run navigation goBack', () => {
    const gen = pressedCityAsync(pressedCity(city));

    expect(gen.next().value).toEqual(put(changeCity(city)));
    expect(gen.next().value).toEqual(put(getWeather()));
    expect(gen.next().value).toEqual(rootNavigation.goBack());
    expect(gen.next().done).toBeTruthy();
  });
});

describe('getWeatherAsync ', () => {
  test('should call select 4 times', () => {
    const gen = getWeatherAsync();

    expect(gen.next().value).toEqual(select(data));
    expect(gen.next().value).toEqual(select(query));
    expect(gen.next().value).toEqual(select(usedCities));
    expect(gen.next().value).toEqual(select(temperatureScale));
  });

  // test('should use 1 call and put 2 actions', async () => {
  //   const dispatched = [];
  //   const data: TGroupWeather = {
  //     list: [itemMock],
  //     city: {
  //       id: 1341,
  //       name: 'name',
  //       coord: {
  //         lat: '445154',
  //         lon: '414154',
  //       },
  //       sunrise: 551454,
  //       sunset: 411411,
  //     },
  //   };
  //   const apiCall = jest.fn().mockImplementation(() => data);

  //   runSaga(
  //     {
  //       dispatch: (action) => null,
  //     },
  //     getWeatherAsync,
  //   );

  //   // expect(dispatched).toEqual();
  // });
});
