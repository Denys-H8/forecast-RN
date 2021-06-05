import * as ACTION from './actionTypes';
import { TUser } from './reducer';

export const login = () => ({ type: ACTION.LOGIN });
export const logout = () => ({ type: ACTION.LOGOUT });
export const logoutSuccess = () => ({ type: ACTION.LOGOUT_SUCCESS });
export const loginStarted = () => ({ type: ACTION.LOGIN_STARTED });
export const loginSuccess = (user: TUser) => ({ type: ACTION.LOGIN_SUCCESS, payload: user });
export const changedEmail = (email: string | false) => ({ type: ACTION.CHANGED_EMAIL, payload: email });
export const changedPassword = (password: string) => ({ type: ACTION.CHANGED_PASSWORD, payload: password });
export const failedEmail = () => ({ type: ACTION.FAILED_EMAIL });
export const failedPassword = () => ({ type: ACTION.FAILED_PASSWORD });
export const startLoading = () => ({ type: ACTION.START_LOADING });
export const loading = (value: boolean) => ({ type: ACTION.LOADING_LOGIN, payload: value });
