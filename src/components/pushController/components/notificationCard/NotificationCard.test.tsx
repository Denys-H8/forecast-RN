import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import NotificationCard from './NotificationCard';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { notification, removeNotification } from 'src/store/notification/actions';
import { lateNavigation } from 'src/store/weather/actions';

const mockStore = configureStore([]);

const store = mockStore({
  loginReducer: {
    user: { email: 'root@gmail.com' },
  },
});

const message = {
  data: {
    type: 'Weather',
  },
  notification: {
    title: 'Some title',
    body: 'Some message',
  },
};

describe('NotificationCard ', () => {
  test('should render with user', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <NotificationCard data={message} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render without user', () => {
    const store = mockStore({
      loginReducer: {
        user: null,
      },
    });

    const { toJSON } = render(
      <Provider store={store}>
        <NotificationCard data={message} />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should dispatch action when click on notification with user', () => {
    store.dispatch = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <NotificationCard data={message} />
      </Provider>,
    );
    fireEvent.press(getByTestId('NotificationCard.TouchableOpacity'));

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith(notification(message.data.type));
    expect(store.dispatch).toHaveBeenCalledWith(removeNotification(message));
  });

  test('should dispatch action when click on notification without user', () => {
    const store = mockStore({
      loginReducer: {
        user: null,
      },
    });

    store.dispatch = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <NotificationCard data={message} />
      </Provider>,
    );
    fireEvent.press(getByTestId('NotificationCard.TouchableOpacity'));

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    expect(store.dispatch).toHaveBeenCalledWith(lateNavigation(message.data.type));
    expect(store.dispatch).toHaveBeenCalledWith(removeNotification(message));
  });

  test('should dispatch action when close notification pressed', () => {
    store.dispatch = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <NotificationCard data={message} />
      </Provider>,
    );
    fireEvent.press(getByTestId('NotificationCard.TouchableOpacity.Remove'));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(removeNotification(message));
  });
});
