import { put, takeEvery } from 'redux-saga/effects';
import * as ACTION from '../actions';
import auth from '@react-native-firebase/auth';
import * as SELECTORS from '../selectors';
import { select } from 'redux-saga/effects';
import { LOGIN, LOGOUT, START_LOADING } from '../actionTypes';
import { weatherActions, loginActions } from 'src/store/rootActions';
import * as Keychain from 'react-native-keychain';
import { TUser } from '../reducer';

export function* loginAsync() {
  const email: string = yield select(SELECTORS.email);
  const password: string = yield select(SELECTORS.password);

  try {
    const userData: { user: TUser } = yield auth().signInWithEmailAndPassword(email, password);

    yield put(ACTION.loginSuccess(userData.user));
    yield Keychain.setGenericPassword('login', email);
  } catch (error) {
    switch (error.code) {
      case 'auth/user-not-found':
        yield put(ACTION.failedEmail());
        break;
      case 'auth/wrong-password':
        yield put(ACTION.failedPassword());
        break;
    }
  }
}

export function* logoutAsync() {
  try {
    yield auth().signOut();
    yield put(ACTION.logoutSuccess());
    yield Keychain.resetGenericPassword();
  } catch (error) {
    console.log(error);
  }
}

export function* startLoading() {
  yield put(loginActions.loading(true));
  yield put(weatherActions.getWeather());
}

export default function* watchLoginAsync() {
  yield takeEvery(LOGIN, loginAsync);
  yield takeEvery(LOGOUT, logoutAsync);
  yield takeEvery(START_LOADING, startLoading);
}
