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
    Button,
    Alert
} from 'react-native';
import CodePush from 'react-native-code-push';
import Toast from 'react-native-root-toast';
import Spinner  from 'react-native-loading-spinner-overlay';


export default class HomeScreen extends Component < {} > {
    static navigationOptions = ({ navigation }) => ({
        title: 'homepage',
    });
    constructor() {
        super();
        this.state = {
            syncMessage: '',
            checking: false, 
            downloadProgress: ''
        };
    }
    // 监听更新状态
    codePushStatusDidChange(syncStatus) {
        switch (syncStatus) {
            case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                this.setState({ syncMessage: "Checking for update." });
                break;
            case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                this.setState({checking: true, syncMessage: "Downloading package." });
                break;
            case CodePush.SyncStatus.AWAITING_USER_ACTION:
                this.setState({ syncMessage: "Awaiting user action." });
                break;
            case CodePush.SyncStatus.INSTALLING_UPDATE:
                this.setState({checking: false, syncMessage: "Installing update." });
                Alert.alert('更新提示', '下载已完成，欢迎使用', [{
                    text: '确定',
                    onPress: () => {
                        CodePush.restartApp();
                    }
                }], {
                  cancelable: false
                });
                break;
            case CodePush.SyncStatus.UP_TO_DATE:
                this.setState({ syncMessage: "App up to date.", progress: false });
                break;
            case CodePush.SyncStatus.UPDATE_IGNORED:
                this.setState({ syncMessage: "Update cancelled by user.", progress: false });
                break;
            case CodePush.SyncStatus.UPDATE_INSTALLED:
                this.setState({ syncMessage: "Update installed and will be applied on restart.", progress: false });
                break;
            case CodePush.SyncStatus.UNKNOWN_ERROR:
                this.setState({ syncMessage: "An unknown error occurred.", progress: false });
                break;
        }
    }
    checkUpdate() {
        CodePush.sync({
            updateDialog: {
                appendReleaseDescription: true,
                descriptionPrefix: '\n\n更新内容：\n',
                title: '有新的更新',
                mandatoryUpdateMessage: '发现新版本，请更新force',
                optionalUpdateMessage: '发现新版本，请更新',
                optionalIgnoreButtonLabel: '稍后更新',
                optionalInstallButtonLabel: '后台更新',
                mandatoryContinueButtonLabel: '立即更新',
            },
            // installMode: CodePush.InstallMode.IMMEDIATE,
            mandatoryInstallMode: CodePush.InstallMode.ON_NEXT_RESTART,
            deploymentKey: "TKbIP43ZOjbk6hw_PO1KbAElCaFW137ad959-40ca-425c-8902-abee4dbafc33",
        }, (status) => {
            this.codePushStatusDidChange(status)
        }, ({receivedBytes, totalBytes})=>{
            this.setState({
                checking: true, 
                downloadProgress: `正在下载：${Math.round(receivedBytes / totalBytes * 100)}%`
            })
        }
        );
    }
    toastText(){
        Toast.show('正在后台下载...', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.CENTER,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0
          });
    }
    componentDidMount() {
        // this.checkUpdate()
    }
    render() {
        const { navigate } = this.props.navigation;
        global.storage = 5555
        return ( 
            <View style = { { flex: 1, alignItems: 'center', justifyContent: 'center' } } >
                <Text > Home Screen </Text>
                <Button onPress = {() => navigate('Detail', { name: 'Go to Detail' })}
                        title = "Go to Detail" />
                <Button onPress = { () => navigate('Chapter', { name: 'Go to Chapter' })} 
                        title = "Go to Chapter" />
                <Button onPress = { () => navigate('Guide', { name: 'Go to Guide' }) }
                            title = "Go to Guide" />
                <Button onPress = { () => this.checkUpdate() }
                            title = "codePush立即更新。。。。" />
                <Button onPress = { () => this.toastText() }
                            title = "Toast提示" /> 
                <Spinner visible={this.state.checking} 
                         textContent={this.state.downloadProgress} 
                         textStyle={{color: '#FFF'}} 
                         animation={'fade'}
                         overlayColo={'rgba(0, 0, 0, 0.5)'}
                />
            </View>
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
