import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class PrayerRequest extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.text}>{this.props.prayer.text}</Text>
            <Text style={styles.label}>{this.props.prayer.name}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
label: {
    fontWeight: 'bold',
    color: '#70903C',
    fontSize: 24,
    textAlign: 'right'
  },
  text: {
    color: '#5c5c5c',
    fontStyle: 'italic'
  },
  container: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    width: 350,
    // flexDirection: 'row',
    // flexWrap: 'wrap'
  }
});