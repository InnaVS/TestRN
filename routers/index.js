import React from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import MyHomeScreen from '../components/MyHomeScreen';
import MySecondScreen from '../components/MySecondScreen';

export const AppNavigator = StackNavigator({
  Root: {
    screen: TabNavigator(
      {
        HomeScreen: {
          screen: MyHomeScreen,
          navigationOptions: () => ({
            showIcon: true,
            tabBarIcon: (
              <Icon
                name='glass'
                size={20}
              />
            )
          })
        },
        SecondScreen: {
          screen: MySecondScreen,
          navigationOptions: () => ({
            headerTitle: (
              <Text style={{fontSize: 18, fontWeight: '500'}}>
                {`Second`}
              </Text>
            ),
            tabBarIcon: (
              <Icon
                name='user'
                size={20}
              />
            ),
            tabBarLabel: (
              <Text>
                Second
              </Text>
            )
          })
        }
      }, {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
          showIcon: true,
          showLabel: false
          // scrollEnabled: true
        },
      })
  },
  SubRoot: {
    screen: DrawerNavigator(
      {
        HomeScreen: {
          screen: MyHomeScreen
        },
        SecondScreen: {
          screen: MySecondScreen
        }
      })
  }
});