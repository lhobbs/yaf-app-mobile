import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';


export default class PrayerRequest extends Component {
  state = {
    hearted: this.props.prayer.hearted
  }
  renderHeart() {
    if (this.state.hearted) {
      return <View>
            <Icon name="md-heart" style={styles.iconFull} onPress={() => this.setState({hearted: false})} />
          {/* <Text>I'm praying with you</Text> */}
      </View>
    }
    else {
      return <View>
                  <Icon name="md-heart-outline" style={styles.iconOutline} onPress={() => this.setState({hearted: true})} />
        </View>
    }
  }
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.text}>{this.props.prayer.text}</Text>
            <Text style={styles.label}>{this.props.prayer.name}</Text>
            {this.renderHeart()}
          </View>
        );
    }
}

const styles = StyleSheet.create({
label: {
    fontWeight: 'bold',
    color: '#70903C',
    fontSize: 18,
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
  },
  iconOutline: {
    fontSize: 30,
    height: 30,
  },
  iconFull: {
    fontSize: 30,
    height:30,
    color: 'pink'
  }
});