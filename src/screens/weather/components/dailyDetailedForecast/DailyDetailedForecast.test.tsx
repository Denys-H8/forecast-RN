import React from 'react';
import { render } from '@testing-library/react-native';
import DailyDetailedForecast from './DailyDetailedForecast';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { weather, weatherStatsValue } from './testData';

const mockStore = configureStore([]);

const store = mockStore({
  weatherReducer: {
    weather,
    weatherStats: weatherStatsValue,
  },
});

describe('DailyDetailedForecast ', () => {
  test('should render correctly with today date', () => {
    const date = 'today';
    const { toJSON } = render(
      <Provider store={store}>
        <DailyDetailedForecast date={date} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render correctly with not today date', () => {
    const date = '2021-04-18';
    const { toJSON } = render(
      <Provider store={store}>
        <DailyDetailedForecast date={date} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
