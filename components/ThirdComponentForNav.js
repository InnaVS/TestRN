import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class ThirdComponentForNav extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>
          3
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#175b4b',
  }
});