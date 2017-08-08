import React, { Component } from 'react';
import {
    WebView,
    Image,
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Photo extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Image 
            source={this.props.image.src}
            style={styles.image}
            resizeMode="cover"
            />
          <Text style={styles.caption}>{this.props.image.caption}</Text>
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
    maxHeight: 375
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