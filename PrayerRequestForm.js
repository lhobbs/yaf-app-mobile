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

export default class PrayRequestForm extends Component {
    static navigationOptions = {
        title: 'Let us believe with you ',
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
            <TextInput
                style={styles.formInputLarge}
                onChangeText={(content) => this.setState({content})}
                editable = {true}
                maxLength = {4000}
                multiline = {true}
                value = {this.state.content}
                placeholder = 'Prayer Request'
            />
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
form: {
    marginTop: 20
},
formInput: {
    marginTop: 10,
    marginBottom: 10,
    height: 40, 
    //borderColor: 'gray', borderWidth: 1
},
formInputLarge: {
    marginTop: 10,
    marginBottom: 10,
    minHeight: 100
    //height: 40, 
    //borderColor: 'gray', borderWidth: 1
},
label: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24
  },
submitBtn: {
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20
}
});