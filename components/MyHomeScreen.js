import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  View
} from 'react-native';

export default class MySecondScreen extends Component {
  render () {
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
        </View>


        <Button
          title="Press me"
          style={styles.but}
          onPress={() => {
            console.log('go to ThirdComponentScreen');
            this.props.navigation.navigate('ThirdComponentScreen')
          }}
        />
        <Button
          title="Press me"
          style={styles.but}
          onPress={() => {
            console.log('go to ThirdComponentScreen');
            this.props.navigation.navigate('ThirdComponentScreen')
          }}
        />
        <Button
          title="Press me"
          style={styles.but}
          onPress={() => {
            console.log('go to ThirdComponentScreen');
            this.props.navigation.navigate('ThirdComponentScreen')
          }}
        />
        <Button
          title="Press me"
          style={styles.but}
          onPress={() => {
            console.log('go to ThirdComponentScreen');
            this.props.navigation.navigate('ThirdComponentScreen')
          }}
        />
        <Button
          title="Press me"
          style={styles.but}
          onPress={() => {
            console.log('go to ThirdComponentScreen');
            this.props.navigation.navigate('ThirdComponentScreen')
          }}
        />
        <Button
          title="Press me"
          style={styles.but}
          onPress={() => {
            console.log('go to ThirdComponentScreen');
            this.props.navigation.navigate('ThirdComponentScreen')
          }}
        />
        <Button
          title="Press me"
          style={styles.but}
          onPress={() => {
            console.log('go to ThirdComponentScreen');
            this.props.navigation.navigate('ThirdComponentScreen')
          }}
        />
        <Button
          title="Press me"
          style={styles.but}
          onPress={() => {
            console.log('go to ThirdComponentScreen');
            this.props.navigation.navigate('ThirdComponentScreen')
          }}
        />
        <Button
          title="Press me"
          style={styles.but}
          onPress={() => {
            console.log('go to ThirdComponentScreen');
            this.props.navigation.navigate('ThirdComponentScreen')
          }}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2c4977',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  text: {
    fontFamily: "Salomeya",
    fontSize: 20,
    fontWeight: "800"
  },
  but: {
    marginTop: 20,
    padding: 30,
    backgroundColor: '#745E77'
  }
});