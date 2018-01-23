import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import MyHomeScreen from '../components/MyHomeScreen';
import MySecondScreen from '../components/MySecondScreen';

export const AppNavigator = StackNavigator({
  Root: {
    screen: TabNavigator({
      HomeScreen: {
        screen: MyHomeScreen,
        navigationOptions: () => ({
          headerTitle: (
            <Text style={{fontSize: 18, fontWeight: '500'}}>
              {`Home`}
            </Text>
          ),
          tabBarIcon: (
            <Icon
              name='home'
              size="20"
            />
          ),
          tabBarLabel: (
            <Text>
              Home
            </Text>
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
              size="20"
            />
          ),
          tabBarLabel: (
            <Text>
              Second
            </Text>
          )
        })
      }
    })
  }
});