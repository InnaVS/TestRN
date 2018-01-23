import React, {Component} from 'react';
import {Provider} from 'react-redux';

import appStore from './store';
import MainComponent from './components/MainComponent';

export default class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <MainComponent />
      </Provider>
    );
  }
}
