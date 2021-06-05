export const weather = {
  list: [
    {
      dt: 1619114400,
      main: {
        temp: 11.84,
        feels_like: 10.7,
        temp_min: 11.84,
        temp_max: 12,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1002,
        humidity: 62,
        temp_kf: -0.16,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.56,
        deg: 195,
        gust: 6.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-22 18:00:00',
    },
    {
      dt: 1619125200,
      main: {
        temp: 11.57,
        feels_like: 10.43,
        temp_min: 11.02,
        temp_max: 11.57,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1001,
        humidity: 63,
        temp_kf: 0.55,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 28,
      },
      wind: {
        speed: 2.36,
        deg: 185,
        gust: 6.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-04-22 21:00:00',
    },
  ],
  city: {
    id: 706483,
    name: 'Kharkiv',
    coord: {
      lat: 50,
      lon: 36.25,
    },
    country: 'UA',
    population: 1430885,
    timezone: 10800,
    sunrise: 1619058476,
    sunset: 1619109522,
  },
};

export { weatherStatsValue } from 'src/screens/forecast/components/dailyWeather/testValue';
