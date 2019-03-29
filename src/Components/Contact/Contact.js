import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class Contact extends Component {
  render() {
    return (
      <View>
        <Text>
            Contact
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("Contact", () => Contact);
