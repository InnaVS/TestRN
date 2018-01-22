/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform
} from 'react-native';
import {
  DrawerNavigator
} from 'react-navigation';

import MyHomeScreen from './components/MyHomeScreen';
import MySecondScreen from './components/MySecondScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

const phone = '+38 (095) 699 37 44';

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Second: {
    screen: MySecondScreen,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default class App extends Component {
  render() {
    const AppNavigator = DrawerNavigator({
      Home: {
        screen: MyHomeScreen,
      },
      Second: {
        screen: MySecondScreen,
      },
    });
    return (
      <AppNavigator ref={nav => { this.navigator = nav; }}/>
    );
  }
}
