import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>
            Home
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("Home", () => Home);
