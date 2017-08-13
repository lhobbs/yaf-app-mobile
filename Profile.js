import React, { Component } from 'react';
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
import {CheckBox} from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Profile and Settings',
        headerStyle: {backgroundColor: '#3B3273'},
        headerTitleStyle: {color: 'white'}
    }
    state = {
        notificationsEmailOn: true,
        notificationsMobileOn: true
    }
    render() {
        return (
        <View style={{backgroundColor: '#70903C'}}>
            <View style={styles.top}>
                <Image 
                source={require('./imgs/me.jpg')}
                style={{height: 100, width: 100}}
                />
                <Text style={styles.name}>Lisa Hobbs</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.label}>Phone</Text>
                <Text>(970)-531-5937</Text>
                <Text style={styles.label}>Email</Text>
                <Text>lhobbs27@gmail.com</Text>
                <Text style={styles.label}>Birthday</Text>
                <Text>September 27th</Text>
                <Text style={styles.label}>Location</Text>
                <Text>Denver</Text>
                <Text style={styles.label} onPress={() => this.props.navigation.navigate("NotificationSettings")}>Notifications</Text>
                <Switch
                    style={{alignSelf: 'flex-start'}}
                    value={this.state.notificationsMobileOn}
                    onValueChange={(v) => this.setState({notificationsMobileOn: v})} />
                {/* <Text>Mobile</Text>
                <Switch
                    style={{alignSelf: 'flex-start'}}
                    value={this.state.notificationsMobileOn}
                    onValueChange={(v) => this.props.navigation.navigate('Post')} />
                <Text>Email</Text>
                <Switch
                    style={{alignSelf: 'flex-start'}}
                    value={this.state.notificationsEmailOn}
                    onValueChange={(v) => this.setState({notificationsEmailOn: v})} /> */}
                {/*<CheckBox
                title='Click Here'
                checked={this.state.checked}
                />*/}
            </View>
            {/* <ActionButton
                buttonColor="#D8C23E"
                onPress={() => { console.log("hi")}}
                icon={<Icon name="md-create" style={styles.actionButtonIcon} />}
            /> */}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#E3E3E3', //#4A5A09', // '#70903C', //'#5FA7D8',//'#81BEDB',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 30
    },
    name: {
        fontSize: 24
    },
    info: {
        // backgroundColor: '#7EBCDC',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20
    },
    label: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 24
  },
});