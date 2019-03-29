import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, Button} from 'react-native';

var s = require('../../style');

export default class Contact extends Component {
  render() {
    return (
      <View>
        <Text style={s.heading}>Contact</Text>
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder='Enter name'
          />
          <TextInput
            style={{height: 40}}
            placeholder='Enter email'
          />
          <TextInput
            style={{height: 40}}
            placeholder='Enter phone number'
          />
          <Button
            title="Submit"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("Contact", () => Contact);
