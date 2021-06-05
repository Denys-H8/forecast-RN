import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DailyWeather from './DailyWeather';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { weatherStatsValue } from './testValue';
import * as m from './DailyWeather';
import { getCurrentDate } from 'src/helpers';

const mockStore = configureStore([]);

const store = mockStore({
  settingsReducer: {
    dayPeriod: 4,
  },
  weatherReducer: {
    weatherStats: weatherStatsValue,
  },
});

describe('DailyWeather ', () => {
  Date.now = jest.fn(() => 1619098295 * 1000);

  test('should render correctly', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <DailyWeather />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should handle day press with today date', () => {
    const spy = jest.spyOn(m, 'handleDayPress');
    const handleDayPressMock = m.handleDayPress('2021-04-22');
    const { getByTestId } = render(
      <Provider store={store}>
        <DailyWeather />
      </Provider>,
    );
    fireEvent.press(getByTestId('DailyWeather.TouchableOpacity.Day.2021-04-22'));
    expect(spy).toHaveBeenCalled();
    expect(handleDayPressMock).toBe(undefined);
  });

  test('should handle day press with not today date', () => {
    const spy = jest.spyOn(m, 'handleDayPress');
    const handleDayPressMock = m.handleDayPress('2021-04-20');
    const { getByTestId } = render(
      <Provider store={store}>
        <DailyWeather />
      </Provider>,
    );
    fireEvent.press(getByTestId('DailyWeather.TouchableOpacity.Day.2021-04-22'));
    expect(spy).toHaveBeenCalled();
    expect(handleDayPressMock).toBe(undefined);
  });
});
