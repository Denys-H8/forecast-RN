import { userSelector, loadingSelector, email, password, emailError, passError } from './selectors';
import { TReducer } from 'src/store/rootReducer';

const state = {
  loginReducer: {
    user: null,
    loadingLogin: true,
    email: '',
    password: '',
    btnDisabled: true,
    emailError: false,
    passwordError: false,
  },
} as TReducer;

describe('Login Selectors', () => {
  test('Should return user', () => {
    expect(userSelector(state)).toBe(state.loginReducer.user);
  });
  test('Should return loadingLogin', () => {
    expect(loadingSelector(state)).toBe(state.loginReducer.loadingLogin);
  });
  test('Should return email', () => {
    expect(email(state)).toBe(state.loginReducer.email);
  });
  test('Should return password', () => {
    expect(password(state)).toBe(state.loginReducer.password);
  });
  test('Should return emailError', () => {
    expect(emailError(state)).toBe(state.loginReducer.emailError);
  });
  test('Should return passwordError', () => {
    expect(passError(state)).toBe(state.loginReducer.passwordError);
  });
});
