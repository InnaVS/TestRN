import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Picker,
  Switch,
  Alert
} from 'react-native';

export default class MySecondScreen extends Component {
  state = {
    text: '',
    language: 'js',
    switchVal: false
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          2
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          style={{width: '70%'}}
          value={this.state.text}
          placeholder="Введите что-либо..."
          underlineColorAndroid="black"
          selectionColor={'black'}
        />
        <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Switch
          value={this.state.switchVal}
          tintColor="black"
          onTintColor="black"
          onValueChange={(value) => {this.setState({switchVal: value})}}
        />
        {this.state.switchVal && Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
            {text: 'Ask me later', onPress: () => this.setState({switchVal: false})},
            {text: 'Cancel', onPress: () => this.setState({switchVal: false}), style: 'cancel'},
            {text: 'OK', onPress: () => this.setState({switchVal: false})},
          ],
          { cancelable: false }
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5b192e',
  }
});