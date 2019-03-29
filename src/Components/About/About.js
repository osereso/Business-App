import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

var s = require('../../style');

export default class About extends Component {
  render() {
    return (
      <View>
        <Text style={s.heading}>About</Text>
        <Text style={s.sectionText}>Ex reprehenderit dolor sint in officia. Incididunt tempor labore qui Lorem. In laborum excepteur et velit. Et nulla sint minim enim quis. Aute sunt minim minim in culpa ex commodo ea sunt aliqua Lorem laborum. Veniam enim ullamco duis sit. Voluptate Lorem qui irure ea.</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("About", () => About);
