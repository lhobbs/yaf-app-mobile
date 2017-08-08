import React, { Component } from 'react';
import moment from 'moment'
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Picker
} from 'react-native';
// import {BoxShadow} from 'react-native-shadow'


export default class Poll extends Component {
  state = {
      activities: ['Camping', 'Hiking', 'Game Night'],
      activity: null,
      value: null
  }
    render() {
        const shadowOpt = {
			width:160,
			height:170,
			color:"#000",
			border:2,
			radius:3,
			opacity:0.2,
			x:0,
			y:3,
			style:{marginVertical:5}
		}

        return (
          <View style={styles.container}> 
            <Text style={styles.text}>{this.props.question}</Text>
            <Picker
                selectedValue={this.state.value}
                onValueChange={(value) => this.setState({value})}>
                {this.props.options.map((val, i) => <Picker.Item key={i} label={val} value={i} />)}
            </Picker>
            <Button 
                title='Submit'
                color='#70903C'
                onPress={() => console.log('yay')}
            />
          </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: 350,
        padding: 10,
        margin: 5,
        shadowColor: 'red',
  shadowOffset: {width: 0, height: 7},
  shadowOpacity: 0.8,
  shadowRadius: 8,
    },
  label: {
    fontWeight: 'bold',
    color: '#8579BC',
    fontSize: 24
  },
  text: {
    color: '#5c5c5c'
  }
});