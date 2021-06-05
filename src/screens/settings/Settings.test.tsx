import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Settings from './Settings';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {
  changedAge,
  changedDayPeriod,
  changedName,
  changedTemperatureScale,
  changedUpdateTime,
} from 'src/store/settings/actions';
import { logout } from 'src/store/login/actions';

const mockStore = configureStore([]);

const store = mockStore({
  settingsReducer: {
    dayPeriod: 4,
    name: 'Name',
    age: 19,
    updateTime: 15,
    temperatureScale: 'metric',
  },
});

describe('Forecast ', () => {
  test('should render correctly', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <Settings />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should handle TempScale change metric', () => {
    store.dispatch = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <Settings />
      </Provider>,
    );

    fireEvent.press(getByTestId('Settings.Scale.Metric'));
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(changedTemperatureScale('metric'));
  });

  test('should handle TempScale change imperial', () => {
    store.dispatch = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <Settings />
      </Provider>,
    );

    fireEvent.press(getByTestId('Settings.Scale.Imperial'));
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(changedTemperatureScale('imperial'));
  });

  test('should handle logout', () => {
    store.dispatch = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <Settings />
      </Provider>,
    );

    fireEvent.press(getByTestId('Settings.Logout'));
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(logout());
  });

  test('should handle change name', () => {
    store.dispatch = jest.fn();

    const newName = 'newName';
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Settings />
      </Provider>,
    );
    fireEvent.changeText(getAllByTestId('InputField.TextInput')[0], newName);

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(changedName(newName));
  });

  test('should handle change age', () => {
    store.dispatch = jest.fn();

    const newAge = '20';
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Settings />
      </Provider>,
    );

    fireEvent.changeText(getAllByTestId('InputField.TextInput')[1], newAge);

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(changedAge(newAge));
  });

  test('should handle change weather period', () => {
    store.dispatch = jest.fn();

    const newValue = 2;
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Settings />
      </Provider>,
    );

    fireEvent(getAllByTestId('Slider.Slider')[0], 'onValueChange', newValue);

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(changedDayPeriod(newValue));
  });

  test('should handle change update period', () => {
    store.dispatch = jest.fn();

    const newValue = 20;
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Settings />
      </Provider>,
    );

    fireEvent(getAllByTestId('Slider.Slider')[1], 'onValueChange', newValue);

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(changedUpdateTime(newValue));
  });
});
