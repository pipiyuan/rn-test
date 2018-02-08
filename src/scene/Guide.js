/**
 * 重置密码成功
 * Date: 2017-02-27
 * Author:Lewis
 * Contact:at930823@gmail.com
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  DeviceEventEmitter,
  Dimensions,
  Platform
} from 'react-native';

import Swiper from 'react-native-swiper';
const IMGDATA = [
  require('../assets/Images/guide/guide_01.png'), 
  require('../assets/Images/guide/guide_02.png'), 
  require('../assets/Images/guide/guide_03.png')
];

export default class NSwiper extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Platform.OS === 'android' && SplashScreen.hide();
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Swiper style={styles.wrapper}
                dot={<View style={{
                  backgroundColor: '#fdc18b',
                  width: 6,
                  height: 6,
                  borderRadius: 4,
                  marginLeft: 5,
                  marginRight: 5,
                  marginTop: 3,
                  marginBottom: 3
                }}/>}
                activeDot={<View style={{
                  backgroundColor: '#ff9233',
                  width: 18,
                  height: 6,
                  borderRadius: 4,
                  marginLeft: 5,
                  marginRight: 5,
                  marginTop: 3,
                  marginBottom: 3
                }}/>}
                paginationStyle={{
                  alignSelf: 'center', bottom: 150
                }}
                showsPagination={false}
                loop={false}
        >
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.bg}><Image style={styles.bgImage} resizeMode='cover'
                                           source={require('../assets/Images/guide/guide_bg.png')}/></View>
            <View style={styles.slide}>
              <Image resizeMode='contain' style={styles.image} source={require('../assets/Images/guide/guide_01.png')}/>
            </View>
            <View style={styles.buttonP}>
              <Image resizeMode='cover' style={styles.logo} source={require('../assets/Images/guide/logo.png')}/>
            </View>
          </View>

          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.bg}><Image style={styles.bgImage} resizeMode='cover'
                                           source={require('../assets/Images/guide/guide_bg.png')}/></View>
            <View style={styles.slide}>
              <Image resizeMode='contain' style={styles.image} source={require('../assets/Images/guide/guide_02.png')}/>
            </View>
            <View style={styles.buttonP}>
              <Image resizeMode='cover' style={styles.logo} source={require('../assets/Images/guide/logo.png')}/>
            </View>
          </View>

          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.bg}><Image style={styles.bgImage} resizeMode='cover'
                                           source={require('../assets/Images/guide/guide_bg.png')}/></View>
            <View style={styles.slide}>
              <Image resizeMode='contain' style={styles.image} source={require('../assets/Images/guide/guide_03.png')}/>
            </View>
            <View style={styles.buttonP}>
              <TouchableOpacity style={styles.button} onPress={this._gotoMain.bind(this)}>
                <Text style={styles.btnTxt} title=''>开始探索</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonP}>
              <Image resizeMode='cover' style={styles.logo} source={require('../assets/Images/guide/logo.png')}/>
            </View>
          </View>
        </Swiper>
      </View>
    );
  }


  _gotoMain() {
    this.props.navigation.navigate('Home')

  }

}

var styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    zIndex: -1
  },
  bgImage: {
    // flex: 1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  logo: {
    position: 'absolute',
    bottom: 40,
    left: -38,
    alignSelf: 'center',
    height:27,
    width: 89
  },
  slide: {
    flex: 1,
    // flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80
  },
  buttonP: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: '#37abfe',
    bottom: 100,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: -75,
  },
  btnTxt: {
    color: '#37abfe',
    fontSize: 18
  },
  image: {
    width: 300,
    height:400,
    marginTop: -10
  }
});

