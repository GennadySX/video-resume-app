import AsyncStorage from '@react-native-community/async-storage';
import {createStore} from 'redux';
// import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';

// Imports: Redux
import rootReducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

let persistor = persistStore(store);

export {store, persistor};
