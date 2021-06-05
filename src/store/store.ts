import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './rootSaga';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  blacklist: ['loginReducer', 'notificationReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare));
export const persistedStore = persistStore(store);

sagaMiddleWare.run(rootSaga);
