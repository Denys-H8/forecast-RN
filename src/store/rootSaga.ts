import { all } from 'redux-saga/effects';
import watchLoginAsync from './login/sagas';
import watchWeatherAsync from './weather/sagas';
import watchWeatherCitiesAsync from './citySelection/sagas';
import watchScaleAsync from './settings/sagas';
import watchNotificationAsync from './notification/sagas';

export default function* rootSaga() {
  yield all([
    watchLoginAsync(),
    watchWeatherAsync(),
    watchWeatherCitiesAsync(),
    watchScaleAsync(),
    watchNotificationAsync(),
  ]);
}
