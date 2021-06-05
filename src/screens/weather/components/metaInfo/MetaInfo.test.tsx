import React from 'react';
import { render } from '@testing-library/react-native';
import MetaInfo from './MetaInfo';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { weather } from '../dailyDetailedForecast/testData';

const mockStore = configureStore([]);

const store = mockStore({
  weatherReducer: {
    weather,
  },
});

describe('DailyDetailedForecast ', () => {
  test('should render correctly with today date', () => {
    Date.now = jest.fn(() => 1619098295 * 1000);
    const date = 'today';
    const { toJSON } = render(
      <Provider store={store}>
        <MetaInfo date={date} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render correctly with not today date', () => {
    const date = '2021-04-22';
    const { toJSON } = render(
      <Provider store={store}>
        <MetaInfo date={date} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
