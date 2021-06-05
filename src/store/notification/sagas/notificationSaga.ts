import { takeEvery } from 'redux-saga/effects';
import { NOTIFICATION } from '../actionTypes';
import { rootNavigation } from 'src/services';

export function* handleNotification(action: { type: string; payload: string }) {
  yield rootNavigation.navigate(action.payload);
}

export default function* watchNotificationAsync() {
  yield takeEvery(NOTIFICATION, handleNotification);
}
