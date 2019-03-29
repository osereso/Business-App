import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

var s = require('../../style');

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={s.heading}> Home </Text>
        <Text style={s.sectionText}>Dolor consectetur id consectetur ea cillum mollit fugiat officia sunt fugiat adipisicing aliqua eiusmod. Irure elit in incididunt anim esse nisi sit non exercitation ex exercitation tempor. Dolore exercitation occaecat voluptate ipsum nisi in ex do. Culpa aliqua excepteur labore aliqua esse quis nisi magna occaecat ea. Ea veniam elit laborum ex ad nisi incididunt deserunt cupidatat nisi commodo aute. Eu Lorem labore ullamco nostrud officia. </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("Home", () => Home);
