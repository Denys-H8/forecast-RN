import { routeSelector, notificationSelector } from './selectors';
import { TReducer } from 'src/store/rootReducer';

const state = {
  notificationReducer: {
    routeName: '',
    notification: null,
  },
} as TReducer;

describe('Notification Selectors', () => {
  test('Should return routeName', () => {
    expect(routeSelector(state)).toBe(state.notificationReducer.routeName);
  });
  test('Should return query', () => {
    expect(notificationSelector(state)).toBe(state.notificationReducer.notification);
  });
});
