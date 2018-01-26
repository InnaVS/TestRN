import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class MySecondScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.text}>
            Sirius
          </Text>
          <Image
            style={{width: 250, height: 250, marginBottom: 30}}
            source={{uri: 'https://patpgmr.files.wordpress.com/2016/04/night-sky-stars-milky-way-photography-36__880.jpg?w=834'}}
          />
          <TouchableOpacity
            style={styles.but}
            onPress={() => {
              this.props.navigation.navigate('ThirdComponentScreen')
            }}
          >
            <Text style={styles.butText}>
              Press me
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c4977',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: "Salomeya",
    fontSize: 20,
    fontWeight: '300'
  },
  but: {
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderColor: '#0d7774',
    borderWidth: 2
  },
  butText: {
    color: '#0d7774',
    fontWeight: '300'
  }
});