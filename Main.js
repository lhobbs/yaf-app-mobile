import React, { Component } from 'react';
import Cards from './Cards';
import EventDetails from './EventDetails'
import Gallary from './Gallary'
import Video from './Video'
import TitleBar from './TitleBar'
import PostForm from './PostForm'
import Poll from './Poll'
import Photo from './Photo'
import PrayerRequest from './PrayerRequest'
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
import {getEvents, getUpcomingEvents} from './gcal.js'

const img1 = require('./imgs/group1.jpg')
const img2 = require('./imgs/group2.jpg')

export default class Main extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => false})
        this.state = {
            events: [],
            selectedCard: null,
            data: [{month: 'August', day: 19, weekDay: 'Saturday', name: 'Test1', description: 'Here is more info about the event', key: 1}, 
            {month: 'September', day: 21, weekDay: 'Sunday',name: 'Testing 2', description: `Another description.  I'll make this one a little longer`, key: 2}],
            activities: ['Camping', 'Hiking', 'Game Night'],
            dates: ['Sat Oct 3rd', 'Sun Oct 4th', 'Sat Oct 12th'],
            images: [{src: img1, caption: 'New Years in the mountains'}, 
                    {src: img2, caption: 'Sisters in Christ'}],
            prayers: [{name: 'Lisa Hobbs', text: 'Complete healing of my TMJ and headaches'},
                      {name: 'Vince Fontes', text: 'New job and smooth transition'}]
        }
        this.onCardPress = this.onCardPress.bind(this)
    }
    onCardPress(index) {
      this.setState({selectedCard: index})
    }
    componentDidMount () {
      getUpcomingEvents((events) => {
        events.splice(2)
        this.setState({events})
      })
  }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.view2}>
          <Text style={styles.subTitle}>Poll</Text>
          <Poll question="Vote for our September activity" options={this.state.activities} />
          <Poll question="Which date works best for you?" options={this.state.dates} />
        </View>
        <View style={styles.view2}>
          <Text style={styles.subTitle}>Upcoming Events</Text>
          <Cards data={this.state.events} onCardPress={this.onCardPress} selectedCard={this.state.selectedCard} />
          {this.state.selectedCard != null && <EventDetails onHide={() => this.onCardPress(null)} card={this.state.events[this.state.selectedCard]}/>}
        </View>
        <View style={styles.view4}>
           <Text style={styles.subTitle}>Prayer Requests</Text>
          {this.state.prayers.map((prayer, index) => <PrayerRequest key={index} prayer={prayer} />)}
        </View>
        <View style={styles.view3} >
          <Text style={styles.subTitle}>Latest Photos and Videos</Text>
          <Video />
          {this.state.images.map((img, index) => <Photo key={index} image={img} />)}
        </View>
      </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
container: {
    // flex: 1
    backgroundColor: '#E3E3E3'//'#3B3273'
  },
  title: {
    color: 'white',
    fontSize: 42
  },
  subTitle: {
    color: '#3B3273',
    fontSize: 20,
    alignSelf: 'center'
  },
  view1: {
    // flex: 1,
    backgroundColor: 'white',//'#81BEDB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    // flex: 2,
    // backgroundColor: '#3B3273',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  view3: {
    // backgroundColor: '#70903C',
    paddingTop: 20,
    paddingBottom: 20
    //flex: 1
  },
  view4: {
    // backgroundColor: '#E0C016',
    paddingTop: 20,
    paddingBottom: 20
  },
   list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    //flex: 1,
    margin: 5,
    minWidth: 170,
    maxWidth: 223,
    height: 200,
    maxHeight:200,
    backgroundColor: '#FFF',
    borderRadius: 4,
    alignItems: 'center'
  }
});