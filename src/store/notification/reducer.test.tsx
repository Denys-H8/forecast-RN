import { notificationReducer, initialState } from './reducer';
import { removeNotification, addNotification } from './actions';

const notification = { messageId: '545546654' };

describe('CitySelection reducer ', () => {
  test('should return the initial state', () => {
    expect(notificationReducer(undefined, { type: 'Undefined value' })).toEqual(initialState);
  });

  test('should handle addNotification', () => {
    expect(notificationReducer(undefined, addNotification(notification))).toEqual({ ...initialState, notification });
  });

  test('should handle removeNotification', () => {
    expect(notificationReducer(undefined, removeNotification(notification))).toEqual({
      ...initialState,
      notification: null,
    });
  });
});
