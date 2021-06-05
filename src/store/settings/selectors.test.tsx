import { dayPeriod, name, age, updateTime, temperatureScale } from './selectors';
import { TReducer } from 'src/store/rootReducer';

const state = {
  settingsReducer: {
    name: '',
    age: '',
    dayPeriod: 5,
    updateTime: 10,
    temperatureScale: 'metric',
  },
} as TReducer;

describe('Notification Selectors', () => {
  test('Should return dayPeriod', () => {
    expect(dayPeriod(state)).toBe(state.settingsReducer.dayPeriod);
  });
  test('Should return name', () => {
    expect(name(state)).toBe(state.settingsReducer.name);
  });
  test('Should return age', () => {
    expect(age(state)).toBe(state.settingsReducer.age);
  });
  test('Should return updateTime', () => {
    expect(updateTime(state)).toBe(state.settingsReducer.updateTime);
  });
  test('Should return temperatureScale', () => {
    expect(temperatureScale(state)).toBe(state.settingsReducer.temperatureScale);
  });
});
