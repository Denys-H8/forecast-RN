import watchLoginAsync, { loginAsync, logoutAsync, startLoading } from './fetchUser';
import { runSaga } from 'redux-saga';
import { loading, logoutSuccess, loginSuccess } from '../actions';
import { LOGIN, LOGOUT, START_LOADING } from '../actionTypes';
import {} from '../selectors';
import { getWeather } from '../../weather/actions';
import { put, takeEvery } from '@redux-saga/core/effects';
import auth from '@react-native-firebase/auth';
import { setGenericPassword } from 'react-native-keychain';
import { select } from 'redux-saga/effects';
import { email, password } from '../selectors';

describe('watchLoginAsync ', () => {
  const gen = watchLoginAsync();

  test('should wait for every LOGIN and call loginAsync', () => {
    expect(gen.next().value).toEqual(takeEvery(LOGIN, loginAsync));
  });

  test('should wait for every LOGOUT and call logoutAsync', () => {
    expect(gen.next().value).toEqual(takeEvery(LOGOUT, logoutAsync));
  });

  test('should wait for every START_LOADING and call startLoading', () => {
    expect(gen.next().value).toEqual(takeEvery(START_LOADING, startLoading));
  });

  test('should be done on next iteration', () => {
    expect(gen.next().done).toBeTruthy();
  });
});

describe('startLoading ', () => {
  test('should put 2 actions', () => {
    const dispatched: any = [];

    runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      startLoading,
    );

    expect(dispatched).toEqual([loading(true), getWeather()]);
  });
});

describe('logoutAsync ', () => {
  const gen = logoutAsync();

  test('should call auth', () => {
    expect(gen.next().value).toEqual(auth().signOut());
  });

  test('should put logoutSuccess', () => {
    expect(gen.next().value).toEqual(put(logoutSuccess()));
  });

  test('should call setGenericPassword', () => {
    expect(gen.next().value).toEqual(setGenericPassword('login', 'email'));
  });

  test('should be done on next iteration', () => {
    expect(gen.next().done).toBeTruthy();
  });
});

describe('loginAsync ', () => {
  const gen = loginAsync();

  const user = {
    displayName: null,
    email: 'string',
    emailVerified: true,
    isAnonymous: true,
    metadata: { creationTime: 132546, lastSignInTime: 132546 },
    phoneNumber: null,
    photoURL: null,
    providerId: 'string',
    tenantId: null,
    uid: 'string',
  };

  test('should select email', () => {
    expect(gen.next().value).toEqual(select(email));
  });

  test('should select password', () => {
    expect(gen.next().value).toEqual(select(password));
  });

  test('should call auth', () => {
    expect(gen.next().value).toEqual(auth().signInWithEmailAndPassword('email', 'password'));
  });

  test('should call setGenericPassword', () => {
    expect(gen.next().value).toEqual(setGenericPassword('login', 'email'));
  });

  test('should be done on next iteration', () => {
    expect(gen.next().done).toBeTruthy();
  });
});
