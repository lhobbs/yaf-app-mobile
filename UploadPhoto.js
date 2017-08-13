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
    Image,
    TextInput
} from 'react-native';

export default class UploadPhoto extends Component {
    static navigationOptions = {
        title: 'Upload Photo',
        headerStyle: {backgroundColor: '#3B3273'},
        headerTitleStyle: {color: 'white'}
    }
    state = {
        title: '',
        content: ''
    }
    render() {
        return (
        <View style={styles.form}>
            <Text>Coming Soon</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
submitBtn: {
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20
}
});