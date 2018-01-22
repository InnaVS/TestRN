import React, {Component} from 'react';
import {Provider} from 'react-redux';
import appStore from '';

export default class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
      </Provider>
    );
  }
}
