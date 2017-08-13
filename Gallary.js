import React, { Component } from 'react';
import RSVP from './RSVP'
import {
    StyleSheet,
    Text,
    View,
    WebView,
    Image,
    TouchableOpacity
} from 'react-native';

var img1 = require('./imgs/group1.jpg')
var img2 = require('./imgs/group2.jpg')
export default class Gallary extends Component {
  static navigationOptions = {
        title: 'Gallary',
        headerStyle: {backgroundColor: '#3B3273'},
        headerTitleStyle: {color: 'white'}
    }
  state = {
    imgs: [img1, img2],
    videos: []
  }
    render() {
        return (
          <View style={styles.container}> 
              {this.state.imgs.map((img, i) => 
                this.renderImage(img, i)
              )}
            <WebView
            source={{ uri: `https://www.youtube.com/embed/XXvKpp8r9-s` }}
            style={{ alignSelf: 'stretch', height: 300, marginLeft: 10, marginRight: 10 }}
          />
          </View>
        );
    }
    renderImage(img, i) {
      return <Image 
                key={i}
                style={{ height: 160, width:160, margin: 5 }}
                source={img}
                resizeMode="cover"
              />
    }
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    color: '#8579BC',
    fontSize: 24
  },
  text: {
    color: 'white'
  },
  container: {
    backgroundColor: 'white',
    margin: 5,
    width: 350,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});