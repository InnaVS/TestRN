import React, {Component} from 'react';
import {Provider} from 'react-redux';

import appStore from './store';
import MainContainer from './containers/MainContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <MainContainer />
      </Provider>
    );
  }
}
