import * as ACTION from './actionTypes';

export const changedName = (name: string) => ({ type: ACTION.CHANGED_NAME, payload: name });
export const changedAge = (age: string) => ({ type: ACTION.CHANGED_AGE, payload: age });
export const changedDayPeriod = (days: number) => ({ type: ACTION.CHANGED_DAY_PERIOD, payload: days });
export const changedUpdateTime = (time: number) => ({ type: ACTION.CHANGED_UPDATE_TIME, payload: time });
export const changedTemperatureScale = (scale: string) => ({
  type: ACTION.CHANGED_TEMPERATURE_SCALE,
  payload: scale,
});
export const setTemperatureScale = (scale: string) => ({
  type: ACTION.SET_TEMPERATURE_SCALE,
  payload: scale,
});
