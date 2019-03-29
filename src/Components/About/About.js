import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class About extends Component {
  render() {
    return (
      <View>
        <Text>
            About
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("About", () => About);
