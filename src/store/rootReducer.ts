import { combineReducers } from 'redux';
import { cityReducer } from './citySelection';
import { loginReducer } from './login';
import { settingsReducer } from './settings';
import { weatherReducer } from './weather';
import { notificationReducer } from './notification';

export const rootReducer = combineReducers({
  cityReducer,
  loginReducer,
  settingsReducer,
  weatherReducer,
  notificationReducer,
});

export type TReducer = ReturnType<typeof rootReducer>;
