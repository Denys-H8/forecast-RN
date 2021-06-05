import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './Login';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { changedEmail, changedPassword, login } from 'src/store/login/actions';

const mockStore = configureStore([]);

const store = mockStore({
  loginReducer: {
    email: 'email',
    password: 'password',
    emailError: false,
    passError: false,
  },
});

describe('Forecast ', () => {
  test('should render correctly', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should handle change email', () => {
    store.dispatch = jest.fn();

    const newEmail = 'newEmail';
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    fireEvent.changeText(getAllByTestId('Input.TextInput')[0], newEmail);
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(changedEmail(newEmail));
  });

  test('should handle change password', () => {
    store.dispatch = jest.fn();

    const newPassword = 'newPassword';
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    fireEvent.changeText(getAllByTestId('Input.TextInput')[1], newPassword);
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(changedPassword(newPassword));
  });

  test('should handle disabled login button press', () => {
    store.dispatch = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    fireEvent.press(getByTestId('Button.TouchableOpacity'));
    expect(store.dispatch).not.toHaveBeenCalled();
  });

  test('should handle not disabled login button press', () => {
    const store = mockStore({
      loginReducer: {
        email: 'email@gmail.com',
        password: 'passwordValue',
        emailError: false,
        passError: false,
      },
    });

    store.dispatch = jest.fn();

    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    fireEvent.changeText(getAllByTestId('Input.TextInput')[0], 'email@gmail.com');
    fireEvent.changeText(getAllByTestId('Input.TextInput')[1], 'passwordNew');
    fireEvent(getByTestId('Button.TouchableOpacity'), 'onPress');
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(login());
  });
});
