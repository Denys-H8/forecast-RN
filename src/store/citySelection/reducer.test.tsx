import { cityReducer, initialState, TCity, TData, TGroupWeather } from './reducer';
import { queryChanged, getWeatherForCitiesSucess, resetQuery, changeCity, setLoading } from './actions';
import { itemMock } from 'src/screens/citySelection/components/cityCard/CityCard.test';

describe('CitySelection reducer ', () => {
  test('should return the initial state', () => {
    expect(cityReducer(undefined, { type: 'Undefined value' })).toEqual(initialState);
  });

  test('should handle queryChanged', () => {
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

    expect(cityReducer(undefined, queryChanged(query, data))).toEqual({
      ...initialState,
      query,
      data,
    });
  });

  test('should handle getWeatherForCitiesSucess', () => {
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

    expect(cityReducer(undefined, getWeatherForCitiesSucess(data))).toEqual({
      ...initialState,
      weatherData: data,
    });
  });

  test('should handle resetQuery', () => {
    expect(cityReducer(undefined, resetQuery())).toEqual({ ...initialState, query: '' });
  });

  test('should handle changeCity with new city', () => {
    const city: TCity = {
      id: 5164468,
      name: 'name',
      lat: 545144,
      lon: 148344,
    };

    const usedCitiesNew: TCity[] = [...initialState.usedCities, city];

    expect(cityReducer(undefined, changeCity(city))).toEqual({
      ...initialState,
      city: city,
      usedCities: usedCitiesNew,
    });
  });

  test('should handle changeCity with old city', () => {
    const city: TCity = {
      id: 706483,
      name: 'Kharkiv',
      lat: 49.988358,
      lon: 36.232845,
    };

    expect(cityReducer(undefined, changeCity(city))).toEqual({
      ...initialState,
      city: city,
    });
  });

  test('should handle setLoading', () => {
    expect(cityReducer(undefined, setLoading(true))).toEqual({ ...initialState, isLoading: true });
  });
});
