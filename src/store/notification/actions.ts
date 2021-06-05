import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import * as ACTION from './actionTypes';

export const notification = (routeName: string) => ({ type: ACTION.NOTIFICATION, payload: routeName });
export const addNotification = (notification: FirebaseMessagingTypes.RemoteMessage) => ({
  type: ACTION.ADD_NOTIFICATION,
  payload: notification,
});
export const removeNotification = (notification: FirebaseMessagingTypes.RemoteMessage) => ({
  type: ACTION.REMOVE_NOTIFICATION,
  payload: notification,
});
