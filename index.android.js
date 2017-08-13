/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
    Image,
    Navigator,
    DrawerLayoutAndroid,
    NativeModules, StatusBar
} from 'react-native';

import OneSignal from 'react-native-onesignal';

import { StackNavigator } from 'react-navigation';
// import FontAwesome, {Icons} from 'react-native-fontawesome'
import Main from './Main'
import TitleBar from './TitleBar'
import Profile from './Profile'
import PostForm from './PostForm'
import Gallary from './Gallary'
import PrayerRequestForm from './PrayerRequestForm'
import NotificationSettings from './NotificationSettings'

export default class RNOneSignal extends Component {
    static navigationOptions = function(props) {
        return {
            title: 'Young Adult Fellowship',
            headerLeft: <TitleBar/>,
            headerRight:  <TouchableHighlight onPress={() => props.navigation.navigate('Profile')}>
                <Image 
                    source={require('./imgs/gearwhite.png')}
                    style={{height: 30, width: 30}}
                />
            </TouchableHighlight>,
            headerStyle: {backgroundColor: '#3B3273'},
            headerTitleStyle: {color: 'white'}
        }

  }
  
    menuButton() {
        return <TouchableHighlight onPress={() => props.navigation.navigate('Profile')}>
                <Image 
                    source={require('./imgs/gear.png')}
                    style={{height: 30, width: 30}}
                />
            </TouchableHighlight>
    }
    componentWillMount() {
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('registered', this.onRegistered);
        OneSignal.addEventListener('ids', this.onIds);
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('registered', this.onRegistered);
        OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived(notification) {
        console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
      console.log('Message: ', openResult.notification.payload.body);
      console.log('Data: ', openResult.notification.payload.additionalData);
      console.log('isActive: ', openResult.notification.isAppInFocus);
      console.log('openResult: ', openResult);
    }

    onRegistered(notifData) {
        console.log("Device had been registered for push notifications!", notifData);
    }

    onIds(device) {
		console.log('Device info: ', device);
    }

    goToRoute() {
        this.props.navigation.navigate("Profile")
    }

    render() {       
        return (
            <View style={styles.container}>
                <Main navigation={this.props.navigation} />
            </View>
        );
    }
}

const App = StackNavigator({
  Home: { screen: RNOneSignal },
  Profile: {screen: Profile},
  Post: {screen: PostForm},
  Gallary: {screen: Gallary},
  PrayerRequestForm: {screen: PrayerRequestForm},
  NotificationSettings: {screen: NotificationSettings}
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('RNOneSignal', () => App);
