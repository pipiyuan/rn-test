/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootScene from './src/RootScene.js';

export default class App extends Component<{}> {
  componentDidMount() {
    SplashScreen.hide();
    setTimeout(()=>{
      
    },2000)
  }
  render() {
    return (
      <RootScene/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
