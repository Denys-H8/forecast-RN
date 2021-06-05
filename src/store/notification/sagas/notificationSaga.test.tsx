import watchNotificationAsync, { handleNotification } from './notificationSaga';
import { notification } from '../actions';
import { NOTIFICATION } from '../actionTypes';
import { takeEvery } from '@redux-saga/core/effects';
import { rootNavigation } from 'src/services';

describe('watchNotificationAsync ', () => {
  const gen = watchNotificationAsync();

  test('should wait for every NOTIFICATION and call handleNotification', () => {
    expect(gen.next().value).toEqual(takeEvery(NOTIFICATION, handleNotification));
  });

  test('should be done on next iteration', () => {
    expect(gen.next().done).toBeTruthy();
  });
});

describe('handleNotification ', () => {
  const notifID = '123456';
  const gen = handleNotification(notification(notifID));

  test('should call navigation', () => {
    expect(gen.next().value).toEqual(rootNavigation.navigate(notifID));
  });

  test('should be done on next iteration', () => {
    expect(gen.next().done).toBeTruthy();
  });
});
