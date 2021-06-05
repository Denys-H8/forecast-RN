import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import CitySelection from './CitySelection';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { itemMock } from 'src/screens/citySelection/components/cityCard/CityCard.test';
import {
  queryChanged,
  resetQuery,
  getWeatherForCities,
  setLoading,
  pressedCity,
} from 'src/store/citySelection/actions';

const mockStore = configureStore([]);
const city = {
  id: 1024546,
  lat: 1024546,
  lon: 1525545,
  name: 'City',
};
const store = mockStore({
  cityReducer: {
    query: '',
    isLoading: false,
    weatherData: {
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
    },
  },
});

describe('CitySelection ', () => {
  test('should render', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <CitySelection></CitySelection>
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should handle search', async () => {
    const newTextValue = 'AVACD';
    store.dispatch = jest.fn();

    const { toJSON, getByTestId } = render(
      <Provider store={store}>
        <CitySelection></CitySelection>
      </Provider>,
    );

    fireEvent(getByTestId('SearchField.TextInput'), 'onChangeText', newTextValue);

    await new Promise((r) => setTimeout(r, 2000));

    expect(toJSON()).toMatchSnapshot();
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledTimes(5);
    expect(store.dispatch).toHaveBeenCalledWith(resetQuery());
    expect(store.dispatch).toHaveBeenCalledWith(getWeatherForCities());
    expect(store.dispatch).toHaveBeenCalledWith(queryChanged(newTextValue, []));
    expect(store.dispatch).toHaveBeenCalledWith(setLoading(true));
    expect(store.dispatch).toHaveBeenCalledWith(getWeatherForCities());
  });

  test('should handle city press', async () => {
    store.dispatch = jest.fn();

    const { toJSON, getByTestId } = render(
      <Provider store={store}>
        <CitySelection></CitySelection>
      </Provider>,
    );

    fireEvent.press(getByTestId('CityCard.TouchableOpacity'));

    expect(toJSON()).toMatchSnapshot();
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledTimes(3);
    expect(store.dispatch).toHaveBeenCalledWith(resetQuery());
    expect(store.dispatch).toHaveBeenCalledWith(getWeatherForCities());
    expect(store.dispatch).toHaveBeenCalledWith(pressedCity(city));
  });
});
