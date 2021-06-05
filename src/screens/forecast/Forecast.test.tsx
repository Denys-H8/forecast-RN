import React from 'react';
import { render } from '@testing-library/react-native';
import Forecast from './Forecast';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { weatherStatsValue } from './components/dailyWeather/testValue';

const mockStore = configureStore([]);

const store = mockStore({
  settingsReducer: {
    dayPeriod: 4,
  },
  weatherReducer: {
    weatherStats: weatherStatsValue,
  },
});

describe('Forecast ', () => {
  Date.now = jest.fn(() => 1619098295 * 1000);

  test('should render correctly', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <Forecast />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
