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
        source={require('/images/23.png')}
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