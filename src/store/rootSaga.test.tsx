import rootSaga from './rootSaga';
import { all } from 'redux-saga/effects';
import watchLoginAsync from './login/sagas';
import watchWeatherAsync from './weather/sagas';
import watchWeatherCitiesAsync from './citySelection/sagas';
import watchScaleAsync from './settings/sagas';
import watchNotificationAsync from './notification/sagas';

test('should root saga', () => {
  const gen = rootSaga();
  expect(gen.next().value).toEqual(
    all([
      watchLoginAsync(),
      watchWeatherAsync(),
      watchWeatherCitiesAsync(),
      watchScaleAsync(),
      watchNotificationAsync(),
    ]),
  );
});
