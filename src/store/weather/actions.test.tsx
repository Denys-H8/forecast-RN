import { getWeather, getWeatherSuccess, loading, lateNavigation, resetLateNavigation } from './actions';
import { GET_WEATHER, GET_WEATHER_SUCCESS, LOADING, LATE_NAVIGATION, RESET_LATE_NAVIGATION } from './actionTypes';
import { TWeatherData } from './actions';

describe('Weather actions ', () => {
  test('should create an action to getWeather', () => {
    const expectedAction = {
      type: GET_WEATHER,
    };

    expect(getWeather()).toEqual(expectedAction);
  });

  test('should create an action to getWeatherSuccess', () => {
    const expectedAction = {
      type: GET_WEATHER_SUCCESS,
      payload: weatherData,
    };

    expect(getWeatherSuccess(weatherData)).toEqual(expectedAction);
  });

  test('should create an action to loading', () => {
    const expectedAction = {
      type: LOADING,
      payload: true,
    };

    expect(loading(true)).toEqual(expectedAction);
  });

  test('should create an action to lateNavigation', () => {
    const routeName = 'route';
    const expectedAction = {
      type: LATE_NAVIGATION,
      payload: routeName,
    };

    expect(lateNavigation(routeName)).toEqual(expectedAction);
  });

  test('should create an action to resetLateNavigation', () => {
    const expectedAction = {
      type: RESET_LATE_NAVIGATION,
    };

    expect(resetLateNavigation()).toEqual(expectedAction);
  });
});

export const weatherData: TWeatherData = {
  weather: {
    list: [
      {
        dt: 513456545,
        main: {
          temp: 28,
        },
        weather: {
          description: 'Sunny',
          icon: 'string',
          main: 'string',
        },
        clouds: {
          all: 4654134,
        },
        wind: {
          speed: 10,
          deg: 10,
        },
        visibility: 10,
        dx_txt: 'string',
      },
    ],
    city: {
      id: 145435,
      name: 'string',
      coord: {
        lat: 'string',
        lon: 'string',
      },
      sunrise: 53453154,
      sunset: 54643515,
    },
  },
  weatherStats: {
    lat: 4541553,
    lon: 4541553,
    current: [
      {
        dt: 531543,
        sunrise: 531543,
        sunset: 531543,
        temp: 531543,
        feels_like: 531543,
        pressure: 531543,
        humidity: 531543,
        clouds: 531543,
        visibility: 531543,
        wind_speed: 531543,
        wind_deg: 531543,
        weather: {
          id: 531543,
          main: 'string',
          description: 'string',
          icon: 'string',
        },
      },
    ],
    hourly: [
      {
        dt: 4541553,
        temp: 28,
        feels_like: 30,
        pressure: 40,
        humidity: 10,
        clouds: 10,
        visibility: 90,
        wind_speed: 10,
        wind_deg: 10,
        wind_gust: 10,
        weather: [
          {
            id: 5435,
            main: 'string',
            description: 'string',
            icon: 'string',
          },
        ],
      },
    ],
    daily: [
      {
        dt: 20,
        sunrise: 20,
        sunset: 20,
        temp: {
          day: 20,
          min: 20,
          max: 20,
        },
        feels_like: {
          day: 20,
        },
        pressure: 20,
        humidity: 20,
        wind_speed: 20,
        weather: [
          {
            id: 20,
            main: 'string',
            description: 'string',
            icon: 'string',
          },
        ],
        clouds: 20,
      },
    ],
  },
};
