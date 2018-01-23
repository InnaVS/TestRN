import {AsyncStorage} from 'react-native';
import {compose, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore} from 'redux-persist';

import reducers from './reducers';

const middleware = [
  thunkMiddleware,
  createLogger()
];

const appStore = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middleware)),
);

const persistor = persistStore(appStore, {
  storage: AsyncStorage,
  null,
}, () => {appStore.dispatch()});

export default appStore;
