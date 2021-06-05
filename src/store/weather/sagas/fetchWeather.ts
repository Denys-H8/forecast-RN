import { call, delay, put, takeLatest } from 'redux-saga/effects';
import * as ACTION from '../actions';
import { updateTime, temperatureScale } from '../../settings/selectors';
import { citySelector } from '../../citySelection/selectors';
import { GET_WEATHER } from '../actionTypes';
import { select } from 'redux-saga/effects';
import { loginActions } from 'src/store/rootActions';
import Config from 'react-native-config';
import { TWeather, TWeatherStats } from '../reducer';

const APID = Config.APID;

export function* getWeatherAsync() {
  const updateTimeValue: number = yield select(updateTime);

  function* getWeather() {
    const city: { name: string; lat: number; lon: number } = yield select(citySelector);
    const temperatureScaleValue: string = yield select(temperatureScale);
    const weather: TWeather = yield fetch(
      `${Config.WEATHER_URL}q=${city.name}&units=${temperatureScaleValue}&appid=${APID}`,
    ).then((res) => res.json());

    const weatherStats: TWeatherStats = yield fetch(
      `${Config.WEATHER_STATS_URL}lat=${city.lat}&lon=${city.lon}&exclude=minutely,alerts&units=${temperatureScaleValue}&appid=${APID}`,
    ).then((res) => res.json());

    yield put(ACTION.getWeatherSuccess({ weather, weatherStats }));
    yield put(ACTION.loading(false));
    yield put(loginActions.loading(false));
  }

  while (true) {
    try {
      yield put(ACTION.loading(true));
      yield call(getWeather);
      yield delay(updateTimeValue * 60 * 1000);
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* watchWeatherAsync() {
  yield takeLatest(GET_WEATHER, getWeatherAsync);
}
