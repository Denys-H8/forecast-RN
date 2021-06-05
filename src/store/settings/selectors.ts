import { TReducer } from 'src/store/rootReducer';

export const dayPeriod = (state: TReducer) => state.settingsReducer.dayPeriod;
export const name = (state: TReducer) => state.settingsReducer.name;
export const age = (state: TReducer) => state.settingsReducer.age;
export const updateTime = (state: TReducer) => state.settingsReducer.updateTime;
export const temperatureScale = (state: TReducer) => state.settingsReducer.temperatureScale;
