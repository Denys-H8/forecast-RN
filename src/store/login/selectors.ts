import { TReducer } from 'src/store/rootReducer';

export const userSelector = (state: TReducer) => state.loginReducer.user;
export const loadingSelector = (state: TReducer) => state.loginReducer.loadingLogin;
export const email = (state: TReducer) => state.loginReducer.email;
export const password = (state: TReducer) => state.loginReducer.password;
export const emailError = (state: TReducer) => state.loginReducer.emailError;
export const passError = (state: TReducer) => state.loginReducer.passwordError;
