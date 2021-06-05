import { notification, addNotification, removeNotification } from './actions';
import { NOTIFICATION, ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './actionTypes';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

describe('Notification actions ', () => {
  test('should create an action to notification', () => {
    const routeName = 'Weather';
    const expectedAction = {
      type: NOTIFICATION,
      payload: routeName,
    };

    expect(notification(routeName)).toEqual(expectedAction);
  });

  test('should create an action to addNotification', () => {
    const notification: FirebaseMessagingTypes.RemoteMessage = {
      messageId: '46545',
    };
    const expectedAction = {
      type: ADD_NOTIFICATION,
      payload: notification,
    };

    expect(addNotification(notification)).toEqual(expectedAction);
  });

  test('should create an action to removeNotification', () => {
    const notification: FirebaseMessagingTypes.RemoteMessage = {
      messageId: '46545',
    };
    const expectedAction = {
      type: REMOVE_NOTIFICATION,
      payload: notification,
    };

    expect(removeNotification(notification)).toEqual(expectedAction);
  });
});
