import * as ACTION from './actionTypes';

export type TState = {
  user: TUser | null;
  loadingLogin: boolean;
  email: string;
  password: string;
  btnDisabled: boolean;
  emailError: boolean;
  passwordError: boolean;
};

export const initialState: TState = {
  user: null,
  loadingLogin: true,
  email: '',
  password: '',
  btnDisabled: true,
  emailError: false,
  passwordError: false,
};

export const loginReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case ACTION.LOGIN_STARTED:
      return state;
    case ACTION.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        email: '',
        password: '',
      };
    case ACTION.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case ACTION.CHANGED_EMAIL:
      return {
        ...state,
        email: action.payload,
        emailError: false,
      };
    case ACTION.CHANGED_PASSWORD:
      return {
        ...state,
        password: action.payload,
        passwordError: false,
      };
    case ACTION.FAILED_EMAIL:
      return {
        ...state,
        emailError: true,
      };
    case ACTION.FAILED_PASSWORD:
      return {
        ...state,
        passwordError: true,
      };
    case ACTION.LOADING_LOGIN:
      return {
        ...state,
        loadingLogin: action.payload,
      };
    default:
      return state;
  }
};

export type TUser = {
  displayName: string | null;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: { creationTime: number; lastSignInTime: number };
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  tenantId: null;
  uid: string;
};
