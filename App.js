import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import Home from './src/Components/Home/Home';
import About from './src/Components/About/About';
import Contact from './src/Components/Contact/Contact';

var s = require('./src/style');


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
        <View style={s.imageWrap}>
          <Image style={s.image} source={require('./src/Assets/Images/ichtus.png')}/>
        </View>
        <ScrollView style={s.scrollView}>
          <Home />
          <About />
          <Contact />
        </ScrollView>
      </View>
    );
  }
}


