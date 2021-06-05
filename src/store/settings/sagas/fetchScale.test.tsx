import watchScaleAsync, { getScaleAsync } from './fetchScale';
import { changedTemperatureScale, setTemperatureScale } from '../actions';
import { CHANGED_TEMPERATURE_SCALE } from '../actionTypes';
import { takeEvery } from '@redux-saga/core/effects';
import { runSaga } from '@redux-saga/core';
import { getWeather } from '../../weather/actions';
import { getWeatherForCities } from '../../citySelection/actions';

describe('watchScaleAsync ', () => {
  const gen = watchScaleAsync();

  test('should wait for every CHANGED_TEMPERATURE_SCALE and call getScaleAsync', () => {
    expect(gen.next().value).toEqual(takeEvery(CHANGED_TEMPERATURE_SCALE, getScaleAsync));
  });

  test('should be done on next iteration', () => {
    expect(gen.next().done).toBeTruthy();
  });
});

describe('getScaleAsync ', () => {
  test('should call 3 puts', () => {
    const scale = 'metric';
    const dispatched: any = [];

    runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getScaleAsync,
      changedTemperatureScale(scale),
    );

    expect(dispatched).toEqual([setTemperatureScale(scale), getWeather(), getWeatherForCities()]);
  });
});
