import {
  changedName,
  changedAge,
  changedDayPeriod,
  changedUpdateTime,
  changedTemperatureScale,
  setTemperatureScale,
} from './actions';
import {
  CHANGED_NAME,
  CHANGED_AGE,
  CHANGED_DAY_PERIOD,
  CHANGED_UPDATE_TIME,
  CHANGED_TEMPERATURE_SCALE,
  SET_TEMPERATURE_SCALE,
} from './actionTypes';

describe('Settings actions ', () => {
  test('should create an action to changedName', () => {
    const name = 'Denys';
    const expectedAction = {
      type: CHANGED_NAME,
      payload: name,
    };

    expect(changedName(name)).toEqual(expectedAction);
  });

  test('should create an action to changedAge', () => {
    const age = '19';
    const expectedAction = {
      type: CHANGED_AGE,
      payload: age,
    };

    expect(changedAge(age)).toEqual(expectedAction);
  });

  test('should create an action to changedDayPeriod', () => {
    const days = 5;
    const expectedAction = {
      type: CHANGED_DAY_PERIOD,
      payload: days,
    };

    expect(changedDayPeriod(days)).toEqual(expectedAction);
  });

  test('should create an action to changedUpdateTime', () => {
    const time = 15;
    const expectedAction = {
      type: CHANGED_UPDATE_TIME,
      payload: time,
    };

    expect(changedUpdateTime(time)).toEqual(expectedAction);
  });

  test('should create an action to changedTemperatureScale', () => {
    const scale = 'metric';
    const expectedAction = {
      type: CHANGED_TEMPERATURE_SCALE,
      payload: scale,
    };

    expect(changedTemperatureScale(scale)).toEqual(expectedAction);
  });

  test('should create an action to setTemperatureScale', () => {
    const scale = 'metric';
    const expectedAction = {
      type: SET_TEMPERATURE_SCALE,
      payload: scale,
    };

    expect(setTemperatureScale(scale)).toEqual(expectedAction);
  });
});
