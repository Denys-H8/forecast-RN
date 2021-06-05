import watchWeatherAsync, { getWeatherAsync } from './fetchWeather';
import { runSaga } from 'redux-saga';
import {} from '../actions';
import { GET_WEATHER } from '../actionTypes';
import {} from '../selectors';
import { getWeather } from '../../weather/actions';
import { put, select, takeLatest } from '@redux-saga/core/effects';

describe('watchWeatherAsync ', () => {
  const gen = watchWeatherAsync();

  test('should wait for every GET_WEATHER and call getWeatherAsync', () => {
    expect(gen.next().value).toEqual(takeLatest(GET_WEATHER, getWeatherAsync));
  });

  test('should be done on next iteration', () => {
    expect(gen.next().done).toBeTruthy();
  });
});

// describe('getWeatherAsync ', () => {
//   const dispatched: any = [];

//   runSaga(
//     {
//       dispatch: (action) => dispatched.push(action),
//     },
//     getWeatherAsync,
//   );
// });
