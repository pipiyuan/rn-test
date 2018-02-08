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
  View,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from './scene/Home/home.js';
import DetailScreen from './scene/detail/detail.js';
import ChapterScreen from './scene/chapter/chapter.js';
import Guide from './scene/Guide.js';


export default class RootScene extends Component<{}> {
  render() {
  //   return (
  //     <View>
  //       <Text>01010</Text>
  //     </View>
  //   );
  // }
    return(
      <RootNavigator/>
    )
  }
}

const T1Screen = ({navigation}) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>T1Screen Screen大是的发送到</Text>
    <Button
      onPress={() => navigation.navigate('Home', {name: 'Go to Detail'})}
      title="Go to Home"
    />
  </View>
);

const T2Screen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>T2Screen Screen大是的发送到</Text>
  </View>
);

const RootTabs = TabNavigator({
  T1Screen: {
    screen: T1Screen,
    // navigationOptions: {
    //     tabBar: {
    //         label: '首页',
    //     },
    // }
  },
  T2Screen: {
    screen: T2Screen,
    // navigationOptions: {
    //     tabBar: {
    //         label: '',
    //     },
    // }
  },
}, {
  animationEnabled: false, // 切换页面时不显示动画
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: false, // 禁止左右滑动
  backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
  tabBarOptions: {
      activeTintColor: '#008AC9', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      style: {
          backgroundColor: '#fff', // TabBar 背景色
      },
      labelStyle: {
          fontSize: 12, // 文字大小
      },
  },
});

const RootNavigator = StackNavigator(
  {
    // initialRouteName: {
    //   screen:Guide,
    //   navigationOptions: {
    //     header:null,
    //     // headerTitle: 'Home',
    //     // headerTintColor: 'pink',
    //     // headerStyle:{
    //     //   backgroundColor:'gray'
    //     // }
    //   },
    // },
    Tab: {
      screen: RootTabs,
    },
    Guide: {
      screen: Guide,
      navigationOptions: {
        header:null,
        // headerTitle: 'Home',
        // headerTintColor: 'pink',
        // headerStyle:{
        //   backgroundColor:'gray'
        // }
      },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header:null,
        // headerTitle: 'Home',
        // headerTintColor: 'pink',
        // headerStyle:{
        //   backgroundColor:'gray'
        // }
      },
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        headerTitle: 'Detail',
      },
    },
    Chapter: {
      screen: ChapterScreen,
      navigationOptions: {
        headerTitle: 'Chapter',
      },
    },
  },
  // {
  //  headerMode: 'none',
  //  mode: 'modal',
  //  navigationOptions: {
  //    gesturesEnabled: false,
  //  },
  // }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
