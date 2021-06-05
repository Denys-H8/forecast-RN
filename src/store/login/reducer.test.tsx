import { loginReducer, initialState, TUser } from './reducer';
import {
  loginStarted,
  loginSuccess,
  logoutSuccess,
  changedEmail,
  changedPassword,
  failedEmail,
  failedPassword,
  loading,
} from './actions';

describe('CitySelection reducer ', () => {
  test('should return the initial state', () => {
    expect(loginReducer(undefined, { type: 'Undefined value' })).toEqual(initialState);
  });

  test('should handle loginStarted', () => {
    expect(loginReducer(undefined, loginStarted())).toEqual(initialState);
  });

  test('should handle loginSuccess', () => {
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

    expect(loginReducer(undefined, loginSuccess(user))).toEqual({
      ...initialState,
      user,
      email: '',
      password: '',
    });
  });

  test('should handle logoutSuccess', () => {
    expect(loginReducer(undefined, logoutSuccess())).toEqual({ ...initialState, user: null });
  });

  test('should handle changedEmail', () => {
    const email = 'new email';

    expect(loginReducer(undefined, changedEmail(email))).toEqual({ ...initialState, email, emailError: false });
  });

  test('should handle changedPassword', () => {
    const password = 'new password';

    expect(loginReducer(undefined, changedPassword(password))).toEqual({
      ...initialState,
      password,
      passwordError: false,
    });
  });

  test('should handle failedEmail', () => {
    expect(loginReducer(undefined, failedEmail())).toEqual({
      ...initialState,
      emailError: true,
    });
  });

  test('should handle failedPassword', () => {
    expect(loginReducer(undefined, failedPassword())).toEqual({
      ...initialState,
      passwordError: true,
    });
  });

  test('should handle loading', () => {
    const loadingLogin = true;

    expect(loginReducer(undefined, loading(loadingLogin))).toEqual({
      ...initialState,
      loadingLogin,
    });
  });
});
