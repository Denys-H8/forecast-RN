import {
  queryChanged,
  getWeatherForCities,
  getWeatherForCitiesSucess,
  resetQuery,
  changeCity,
  pressedCity,
  setLoading,
} from './actions';
import {
  QUERY_CHANGED,
  GET_WEATHER_FOR_CITIES,
  GET_WEATHER_FOR_CITIES_SUCESS,
  RESET_QUERY,
  CHANGE_CITY,
  PRESSED_CITY,
  SET_LOADING,
} from './actionTypes';
import { itemMock } from 'src/screens/citySelection/components/cityCard/CityCard.test';
import { TData, TGroupWeather, TCity } from './reducer';

describe('CitySelection actions ', () => {
  test('should create an action to change a query', () => {
    const query = 'Kryvyi Rih';
    const data: TData[] = [
      {
        id: 154153,
        name: 'name',
        state: 'state',
        country: 'UA',
        coord: {
          lon: 1514341,
          lat: 1515531,
        },
      },
    ];
    const expectedAction = {
      type: QUERY_CHANGED,
      payload: { query, data },
    };

    expect(queryChanged(query, data)).toEqual(expectedAction);
  });

  test('should create an action to getWeatherForCities', () => {
    const expectedAction = {
      type: GET_WEATHER_FOR_CITIES,
    };

    expect(getWeatherForCities()).toEqual(expectedAction);
  });

  test('should create an action to getWeatherForCitiesSucess', () => {
    const data: TGroupWeather = {
      list: [itemMock],
      city: {
        id: 1341,
        name: 'name',
        coord: {
          lat: '445154',
          lon: '414154',
        },
        sunrise: 551454,
        sunset: 411411,
      },
    };
    const expectedAction = {
      type: GET_WEATHER_FOR_CITIES_SUCESS,
      payload: data,
    };

    expect(getWeatherForCitiesSucess(data)).toEqual(expectedAction);
  });

  test('should create an action to resetQuery', () => {
    const expectedAction = {
      type: RESET_QUERY,
    };

    expect(resetQuery()).toEqual(expectedAction);
  });

  test('should create an action to changeCity', () => {
    const city: TCity = {
      id: 5164468,
      name: 'name',
      lat: 545144,
      lon: 148344,
    };
    const expectedAction = {
      type: CHANGE_CITY,
      payload: city,
    };

    expect(changeCity(city)).toEqual(expectedAction);
  });

  test('should create an action to pressedCity', () => {
    const city: TCity = {
      id: 5164468,
      name: 'name',
      lat: 545144,
      lon: 148344,
    };
    const expectedAction = {
      type: PRESSED_CITY,
      payload: city,
    };

    expect(pressedCity(city)).toEqual(expectedAction);
  });

  test('should create an action to setLoading', () => {
    const expectedAction = {
      type: SET_LOADING,
      payload: true,
    };

    expect(setLoading(true)).toEqual(expectedAction);
  });
});
