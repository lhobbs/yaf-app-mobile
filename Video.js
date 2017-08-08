import React, { Component } from 'react';
import YouTube, {YouTubeStandaloneAndroid } from 'react-native-youtube'
import {
  StyleSheet,
  View,
  Text,
  WebView
} from 'react-native';


export default class Video extends Component {
  state = {  }

  render() {
    return (
      <View style={styles.container}>
          <WebView
            source={{ uri: `https://www.youtube.com/embed/XXvKpp8r9-s` }}
            style={{ alignSelf: 'stretch', height: 300, marginLeft: 10, marginRight: 10 }}
          />
          <Text style={styles.caption}>Campfire song</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    backgroundColor: 'white',
    margin: 5,
    padding: 5,
    width: 350,
    height: 325
    // flexDirection: 'row',
    // flexWrap: 'wrap'
  },
  caption: {
    color: '#3E3E3E',
    alignSelf: 'center'
  },
  image: {
      width: 340,
      maxHeight: 340
  }
});