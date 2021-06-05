import { settingsReducer, initialState } from './reducer';
import { changedName, changedAge, changedDayPeriod, changedUpdateTime, setTemperatureScale } from './actions';

describe('CitySelection reducer ', () => {
  test('should return the initial state', () => {
    expect(settingsReducer(undefined, { type: 'Undefined value' })).toEqual(initialState);
  });

  test('should handle changedName', () => {
    const name = 'New name';

    expect(settingsReducer(undefined, changedName(name))).toEqual({ ...initialState, name });
  });

  test('should handle changedAge', () => {
    const age = '19';

    expect(settingsReducer(undefined, changedAge(age))).toEqual({ ...initialState, age });
  });

  test('should handle changedDayPeriod', () => {
    const dayPeriod = 3;

    expect(settingsReducer(undefined, changedDayPeriod(dayPeriod))).toEqual({ ...initialState, dayPeriod });
  });

  test('should handle changedUpdateTime', () => {
    const updateTime = 25;

    expect(settingsReducer(undefined, changedUpdateTime(updateTime))).toEqual({ ...initialState, updateTime });
  });

  test('should handle setTemperatureScale', () => {
    const temperatureScale = 'imperial';

    expect(settingsReducer(undefined, setTemperatureScale(temperatureScale))).toEqual({
      ...initialState,
      temperatureScale,
    });
  });
});
