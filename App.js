import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from './src/Components/Home/Home';
import About from './src/Components/About/About';
import Contact from './src/Components/Contact/Contact';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View>
        <Home />
        <About />
        <Contact />
      </View>
    );
  }
}


