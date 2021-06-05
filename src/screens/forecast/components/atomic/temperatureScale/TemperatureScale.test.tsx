import React from 'react';
import { render } from '@testing-library/react-native';
import TemperatureScale from './TemperatureScale';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

const store = mockStore({
  settingsReducer: {
    temperatureScale: 'metric',
  },
});

const storeImperial = mockStore({
  settingsReducer: {
    temperatureScale: 'imperial',
  },
});

describe('TemperatureScale ', () => {
  test('should render metric and temp diff > 3', () => {
    const maxTemperature = 27;
    const minTemperature = 15;
    const { toJSON } = render(
      <Provider store={store}>
        <TemperatureScale minTemperature={minTemperature} maxTemperature={maxTemperature} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render imperial and temp diff <= 3', () => {
    const maxTemperature = 16;
    const minTemperature = 14;
    const { toJSON } = render(
      <Provider store={storeImperial}>
        <TemperatureScale minTemperature={minTemperature} maxTemperature={maxTemperature} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
