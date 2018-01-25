import React from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import {Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import MyHomeScreen from '../components/MyHomeScreen';
import MySecondScreen from '../components/MySecondScreen';
import ThirdComponentScreen from '../components/ThirdComponentForNav';

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
        },
      })
  },
  SubRoot: {
    screen: DrawerNavigator(
      {
        HomeScreen: {
          screen: MyHomeScreen
        },
        ThirdComponentScreen: {
          screen: ThirdComponentScreen,
          navigationOptions: () => ({
            drawerLabel: 'Third',
            drawerIcon: () => (
              <Image
                source={'http://mirpozitiva.ru/uploads/posts/2016-08/1472058016_02.jpg'}
                style={{width: 30, height: 30}}
              />
            ),
          })
        }
      })
  }
});