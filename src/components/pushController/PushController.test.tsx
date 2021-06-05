import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PushController from './PushController';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { notification } from 'src/store/notification/actions';

const mockStore = configureStore([]);

const notificationValue = {
  data: {
    type: 'Weather',
  },
  notification: {
    title: 'Some title',
    body: 'Some message',
  },
};
const store = mockStore({
  loginReducer: {
    user: { email: 'root@gmail.com' },
  },
  notificationReducer: {
    notification: notificationValue,
  },
});

const storeWithoutNotification = mockStore({
  loginReducer: {
    user: { email: 'root@gmail.com' },
  },
  notificationReducer: {
    notification: null,
  },
});

describe('PushController ', () => {
  test('should render with notification', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <PushController>
          <View style={{ backgroundColor: 'green' }} />
        </PushController>
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('should render without notification', () => {
    const { toJSON } = render(
      <Provider store={storeWithoutNotification}>
        <PushController>
          <View style={{ backgroundColor: 'green' }} />
        </PushController>
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  // test('should handle onMessage', () => {
  //   store.dispatch = jest.fn();

  //   const { toJSON } = render(
  //     <Provider store={store}>
  //       <PushController>
  //         <View style={{ backgroundColor: 'green' }} />
  //       </PushController>
  //     </Provider>,
  //   );

  //   expect(store.dispatch).toHaveBeenCalledTimes(1);
  //   expect(store.dispatch).toHaveBeenCalledWith(notification(notificationValue.data.type));
  // });
});
