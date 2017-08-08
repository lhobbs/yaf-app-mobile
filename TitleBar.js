import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    FlatList,
    SectionList,
    Picker,
    Switch,
    Button,
    WebView,
    Image
} from 'react-native';

export default class TitleBar extends Component {
    render() {
        return (
        <View >
            <Image 
            source={require('./imgs/bibleflowerl.png')}
            style={{height: 50, width: 50}}
            />
          {/*<Text style={styles.title}>Title</Text>*/}
          </View>
        );
    }
}

const styles = StyleSheet.create({
titleBar: {
    //justifyContent: 'center',
    flexDirection: 'row',
    //flexWrap: 'wrap',
  },
  title: {
    color: '#3E3E3E',
    fontSize: 36,
    //flex: 1
  }
});