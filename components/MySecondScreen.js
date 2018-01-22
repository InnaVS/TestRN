import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image
} from 'react-native';

export default class MySecondScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Second',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('/images/12.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render () {
    return (
      <View style={styles.container}>
        <Text>
          Соколенко
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go to home page"
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