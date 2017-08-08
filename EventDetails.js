import React, { Component } from 'react';
import moment from 'moment'
import RSVP from './RSVP'
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity
} from 'react-native';


export default class EventDetails extends Component {
  constructor() {
    super();
    this.state = {}
  }
    render() {
        return (
          <View > 
            <View >
              <Text style={styles.label}>When: </Text>
              <Text style={styles.text}>{moment(this.props.card.start).format('MMMM Do h:mm a')}</Text>
              <Text style={styles.label}>What: </Text>
              <Text style={styles.text}>{this.props.card.title}</Text>
              <Text style={styles.label}>Where: </Text>
              <Text style={styles.text}>{this.props.card.location}</Text>
            </View>
            <RSVP />
            <TouchableOpacity onPress={() => this.props.onHide()}>
              <Text style={{color: 'white', alignSelf: 'center'}}>Show Less ^</Text>
            </TouchableOpacity>
          </View>
        );
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
  }
});