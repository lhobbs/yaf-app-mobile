import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    Button,
    TouchableHighlight
} from 'react-native';
import moment from 'moment'


export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      showRSVP: false,
      selectedCard: null
    }
    this.toggleSection = this.toggleSection.bind(this)
    this.cardStyle = this.cardStyle.bind(this)
  }
    render() {
        return (
          <View style={styles.list}> 
            {this.props.data.map((item, index) => this.renderLongCard(item, index))}
          </View>
        );
    }
    renderCard(item, index) {
        return (<TouchableOpacity key={index} style={this.cardStyle(index)}
            onPress={() => this.toggleSection(index)}>
            <Text style={{fontSize:30}}>{moment(item.start).format('MMMM')}</Text>
            <Text style={{fontSize:72}}>{moment(item.start).format('D')}</Text>
            <Text style={{fontSize:24}}>{moment(item.start).format('dddd')}</Text>
        </TouchableOpacity>)
  }
  renderLongCard(item, index) {
    return <TouchableOpacity style={styles.longCard} key={index} onPress={() => this.setState({showRSVP: true, selectedCard: index})}>
            <View style={styles.card}>
              <Text style={{fontSize:20, color: '#3B3273'}}>{moment(item.start).format('dddd')}</Text>
              <Text style={{fontSize:64, color: '#3B3273'}}>{moment(item.start).format('D')}</Text>
              <Text style={{fontSize:18, color: '#3B3273'}}>{moment(item.start).format('MMMM')}</Text>
            </View>
            {!(this.state.showRSVP && this.state.selectedCard == index) && this.renderCardInfo(item)}
            {this.state.showRSVP && this.state.selectedCard == index && this.renderRSVP()}
      </TouchableOpacity>
  }
  renderCardInfo(item) {
    return <View style={{width: 250, flexDirection: 'row'}}>
      <View style={styles.cardInfo}>
              <Text style={styles.label}>What: </Text>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.label}>Where: </Text>
              <Text style={styles.text}>{item.location}</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>R</Text>
              <Text style={styles.buttonText}>S</Text>
              <Text style={styles.buttonText}>V</Text>
              <Text style={styles.buttonText}>P</Text>
            </View>
            </View>
  }
  renderRSVP(item) {
    return <View style={styles.rsvp}>
      <Text style={{fontSize: 20}}>Are you able to attend?</Text>
      <TouchableHighlight onPress={() => this.setState({selectedCard: null, showRSVP: false})}>
        <Text style={{color: 'green', fontSize: 24}}>Yes, I'll be there!</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => this.setState({selectedCard: null, showRSVP: false})}>
        <Text style={{color: 'red', fontSize: 24}}>No, not this time</Text>
      </TouchableHighlight>
      {/*<Button
          title="Yes, I'll make it!"
          color="green"
          onPress={() => { this.setState({showRSVP: false})}} />
      <Button
          title="No, not this time"
          color="red"
          onPress={() => { this.setState({showRSVP: false})}} />*/}
    </View>
  }
  toggleSection(index) {
    //this.setState({selectedCard: index})
    this.props.onCardPress(index)
  }
  cardStyle(index) {
    let style = {
      flex: 1,
      margin: 5,
      width: 170,
      height: 180,
      backgroundColor: '#FFF',
      borderRadius: 4,
      alignItems: 'center'
    }
    if (index == this.props.selectedCard) {
      style.borderWidth = 5
      style.borderColor = '#8579BC'
    }
      return style
  }
}

const styles = StyleSheet.create({
  subTitle: {
    color: 'white',
    fontSize: 36
  },
  list: {
    //flex: 1,
    // justifyContent: 'center',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // borderWidth: 2,
    // borderColor: '#000'
  },
  card: {
    // flex: 1,
    //margin: 5,
    width: 100,
    height: 150,
    backgroundColor: '#FFF',
    // borderRadius: 4,
    alignItems: 'center',
    borderColor: '#5c5c5f',
    borderRightWidth: 1
  },
  longCard: {
    margin: 5,
    flexDirection: 'row',
    height: 150,
    backgroundColor: '#FFF',
//borderColor: '#ECECECE',
 //   borderWidth: 1
  },
  // cardDate: {
  //   height: 200,
  //   width: 200,
  //   borderColor: '#5c5c5f',
  //   borderWidth: 3
  //   // borderRightWidth: 2
  // },
  cardInfo: {
    width: 220,
    padding: 5
  },
  label: {
    fontWeight: 'bold',
    color: '#5C5C5C',
    fontSize: 20
  },
  text: {
    color: '#3C3C3C'
  },
  button: {
    backgroundColor: '#70903C',
    width: 30,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white', 
    fontSize: 28,
    alignSelf: 'center'
  },
  rsvp: {
    width: 250,
    alignItems: 'center'
  }
});