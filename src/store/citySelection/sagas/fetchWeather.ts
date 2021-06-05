import { call, put, takeEvery } from 'redux-saga/effects';
import * as ACTION from '../actions';
import * as SELECTORS from '../selectors';
import { temperatureScale } from '../../settings/selectors';
import { GET_WEATHER_FOR_CITIES, PRESSED_CITY } from '../actionTypes';
import { select } from 'redux-saga/effects';
import { cityActions, weatherActions } from 'src/store/rootActions';
import Config from 'react-native-config';
import { TGroupWeather, TData, TCity } from '../reducer';
import { rootNavigation } from 'src/services';

const APID = Config.APID;

export function* getWeatherAsync() {
  const data: TData[] = yield select(SELECTORS.data);
  const query: string = yield select(SELECTORS.query);
  const usedCities: TCity[] = yield select(SELECTORS.usedCities);
  const temperatureScaleValue: string = yield select(temperatureScale);

  const citiesID =
    query === ''
      ? usedCities.map((item) => {
          return item.id;
        })
      : data.map((item) => {
          return item.id;
        });

  const apiCall = () => {
    return fetch(
      `${Config.WEATHER_GROUP_URL}id=${citiesID.join(',')}&units=${temperatureScaleValue}&appid=${APID}`,
    ).then((res) => res.json());
  };

  try {
    const weatherDataForCities: TGroupWeather = yield call(apiCall);

    yield put(ACTION.getWeatherForCitiesSucess(weatherDataForCities));
    yield put(ACTION.setLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* pressedCityAsync(action: {
  type: string;
  payload: { id: number; name: string; lat: number; lon: number };
}) {
  yield put(cityActions.changeCity(action.payload));
  yield put(weatherActions.getWeather());
  yield rootNavigation.goBack();
}

export default function* watchWeatherCitiesAsync() {
  yield takeEvery(GET_WEATHER_FOR_CITIES, getWeatherAsync);
  yield takeEvery(PRESSED_CITY, pressedCityAsync);
}
