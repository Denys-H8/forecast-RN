import React from 'react';
import { render } from '@testing-library/react-native';
import Weather from './Weather';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { weather, weatherStatsValue } from './components/dailyDetailedForecast/testData';
import { resetLateNavigation } from 'src/store/weather/actions';

const mockStore = configureStore([]);

const store = mockStore({
  weatherReducer: {
    loading: false,
    lateNavigation: null,
    weather,
    weatherStats: weatherStatsValue,
  },
});

describe('Weather ', () => {
  test('should render correctly with today', () => {
    const date = 'today';
    Date.now = jest.fn(() => 1619098295 * 1000);
    const { toJSON } = render(
      <Provider store={store}>
        <Weather route={{ params: { date } }} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render correctly with lateNavigation', () => {
    const store = mockStore({
      weatherReducer: {
        loading: false,
        lateNavigation: 'Settings',
        weather,
        weatherStats: weatherStatsValue,
      },
    });
    const date = 'today';

    store.dispatch = jest.fn();

    const { toJSON } = render(
      <Provider store={store}>
        <Weather route={{ params: { date } }} />
      </Provider>,
    );

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(resetLateNavigation());
  });

  test('should render correctly with lateNavigation', () => {
    const store = mockStore({
      weatherReducer: {
        loading: true,
        lateNavigation: 'Settings',
        weather,
        weatherStats: weatherStatsValue,
      },
    });
    const date = 'today';

    const { toJSON } = render(
      <Provider store={store}>
        <Weather route={{ params: { date } }} />
      </Provider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
