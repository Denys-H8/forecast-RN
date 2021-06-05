import {
  login,
  logout,
  logoutSuccess,
  loginStarted,
  loginSuccess,
  changedEmail,
  changedPassword,
  failedEmail,
  failedPassword,
  startLoading,
  loading,
} from './actions';
import {
  LOGIN,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  CHANGED_EMAIL,
  CHANGED_PASSWORD,
  FAILED_EMAIL,
  FAILED_PASSWORD,
  LOGOUT,
  LOGOUT_SUCCESS,
  START_LOADING,
  LOADING_LOGIN,
} from './actionTypes';
import { TUser } from './reducer';

describe('Login actions ', () => {
  test('should create an action to login', () => {
    const expectedAction = {
      type: LOGIN,
    };

    expect(login()).toEqual(expectedAction);
  });

  test('should create an action to logout', () => {
    const expectedAction = {
      type: LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  test('should create an action to logoutSuccess', () => {
    const expectedAction = {
      type: LOGOUT_SUCCESS,
    };

    expect(logoutSuccess()).toEqual(expectedAction);
  });

  test('should create an action to loginStarted', () => {
    const expectedAction = {
      type: LOGIN_STARTED,
    };

    expect(loginStarted()).toEqual(expectedAction);
  });

  test('should create an action to loginSuccess', () => {
    const user: TUser = {
      displayName: 'name',
      email: 'email',
      emailVerified: true,
      isAnonymous: false,
      metadata: { creationTime: 15345, lastSignInTime: 53545 },
      phoneNumber: null,
      photoURL: null,
      providerId: '4544545654',
      tenantId: null,
      uid: '464446545',
    };
    const expectedAction = {
      type: LOGIN_SUCCESS,
      payload: user,
    };

    expect(loginSuccess(user)).toEqual(expectedAction);
  });

  test('should create an action to changedEmail', () => {
    const email = 'email';
    const expectedAction = {
      type: CHANGED_EMAIL,
      payload: email,
    };

    expect(changedEmail(email)).toEqual(expectedAction);
  });

  test('should create an action to changedPassword', () => {
    const password = 'password';
    const expectedAction = {
      type: CHANGED_PASSWORD,
      payload: password,
    };

    expect(changedPassword(password)).toEqual(expectedAction);
  });

  test('should create an action to failedEmail', () => {
    const expectedAction = {
      type: FAILED_EMAIL,
    };

    expect(failedEmail()).toEqual(expectedAction);
  });

  test('should create an action to failedPassword', () => {
    const expectedAction = {
      type: FAILED_PASSWORD,
    };

    expect(failedPassword()).toEqual(expectedAction);
  });

  test('should create an action to startLoading', () => {
    const expectedAction = {
      type: START_LOADING,
    };

    expect(startLoading()).toEqual(expectedAction);
  });

  test('should create an action to loading', () => {
    const expectedAction = {
      type: LOADING_LOGIN,
      payload: true,
    };

    expect(loading(true)).toEqual(expectedAction);
  });
});
