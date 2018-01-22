import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button
} from 'react-native';

export default class MySecondScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('https://www.google.com.ua/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjFsPiu2evYAhXCZFAKHdYUCAkQjRwIBw&url=http%3A%2F%2Fbipbap.ru%2Fcategory%2Fkrasivye-kartinki&psig=AOvVaw1366rTdMaygtQeCwQQbPP2&ust=1516714880174299')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render () {
    return (
      <View style={styles.container}>
        <Text>
          Инна
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Second')}
          title="Go to second page"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c4977',
  },
  icon: {
    width: 24,
    height: 24,
  }
});