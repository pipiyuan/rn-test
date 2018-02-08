import { AppRegistry } from 'react-native';
import React, { Component } from 'react';

import Main from './App';

export default class App extends Component < {} > {
    constructor() {
        super();
        this.state = {
            syncMessage: '',
        };
    }
    
    render() {
        return ( <
            Main / >
        );
    }
}
AppRegistry.registerComponent('test', () => App);