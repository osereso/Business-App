import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View, Image, ScrollView, Switch} from 'react-native';

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
  constructor() {
    super();
    this.state = {
      logoHidden: false
    }
  }

  render() {
    let logoHidden = this.state.logoHidden;
    let img = <Text></Text>;
    if (logoHidden) {
      img = <Text></Text>;
    } else {
      img = <Image style={s.image} source={require('./src/Assets/Images/ichtus.png')} />
    }
    return (
      <View style={styles.container}>
        {img}
        <View style={s.imageWrap}>
          <Switch onValueChange={(value) => this.setState({logoHidden: value})} value={this.state.logoHidden} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});


