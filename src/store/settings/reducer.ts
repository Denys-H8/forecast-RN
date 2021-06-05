import * as ACTION from './actionTypes';

type TState = {
  name: string;
  age: string | number;
  dayPeriod: number;
  updateTime: number;
  temperatureScale: string;
};

export const initialState: TState = {
  name: '',
  age: '',
  dayPeriod: 5,
  updateTime: 10,
  temperatureScale: 'metric',
};

export const settingsReducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case ACTION.CHANGED_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ACTION.CHANGED_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case ACTION.CHANGED_DAY_PERIOD:
      return {
        ...state,
        dayPeriod: action.payload,
      };
    case ACTION.CHANGED_UPDATE_TIME:
      return {
        ...state,
        updateTime: action.payload,
      };
    case ACTION.SET_TEMPERATURE_SCALE:
      return {
        ...state,
        temperatureScale: action.payload,
      };
    default:
      return state;
  }
};
