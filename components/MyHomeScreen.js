import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class MySecondScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Sirius
        </Text>
        <Image
          style={{width: 250, height: 250}}
          source={{uri: 'https://patpgmr.files.wordpress.com/2016/04/night-sky-stars-milky-way-photography-36__880.jpg?w=834'}}
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
  text: {
    fontFamily: "Salomeya",
    fontSize: 20,
    fontWeight: "800"
  }
});