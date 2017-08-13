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
import DailyVerse from './DailyVerse'
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
    Image,
    TouchableHighlight
} from 'react-native';
import {getEvents, getUpcomingEvents} from './gcal.js'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const img1 = require('./imgs/group1.jpg')
const img2 = require('./imgs/group2.jpg')

export default class Main extends Component {
  static navigationOptions = function(props) {}
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => false})
        this.state = {
            events: [],
            selectedCard: null,
            activities: ['Camping', 'Hiking', 'Game Night'],
            dates: ["Sat Oct 3rd", "Sun Oct 4th", "Sat Oct 10th", "None of these will work for me"],
            images: [{src: img1, caption: 'New Years in the mountains'}, 
                    {src: img2, caption: 'Sisters in Christ'}],
            prayers: [{name: 'Lisa Hobbs', text: 'Complete healing of my TMJ and headaches', hearted: false},
                      {name: 'Vince Fontes', text: 'New job and smooth transition', hearted: true}]
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

    renderActionButton() {
    return ( // 7366BF
        <ActionButton buttonColor="#D8C23E" bgColor="rgba(0,0,0,.5)">
          <ActionButton.Item 
            //textContainerStyle={styles.actionButtonItem} 
            buttonColor='#A3ADDA' 
            title="New Prayer Request" 
            //textStyle={styles.actionButtonItemText} 
            onPress={() => {this.props.navigation.navigate("PrayerRequestForm")}}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
           <ActionButton.Item buttonColor='#ACD5F0' title="Share Something" onPress={() => {this.props.navigation.navigate("Post")}}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item> 
          <ActionButton.Item buttonColor='#a9bc8a' title="Add a photo or video" onPress={() => {this.props.navigation.navigate("Gallary")}}>
            <Icon name="md-images" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    );
  }
    render() {
        return (
          <View>
            <ScrollView contentContainerStyle={styles.container}>
              <DailyVerse />
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
          <TouchableHighlight onPress={() => this.props.navigation.navigate("Gallary")}>
            <Text>See all photos</Text>
          </TouchableHighlight>
        </View>
        
      </ScrollView>
      {this.renderActionButton()}
      </View>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  actionButtonItem : {
    backgroundColor: "transparent",
    borderWidth: 0
  },
  actionButtonItemText: {
    color: 'white',
    fontSize: 16
  }
});