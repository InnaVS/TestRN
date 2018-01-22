import {AsyncStorage} from 'react-native';

import reducers from './reducers';


const appStore = createStore(
  reducers,
);
