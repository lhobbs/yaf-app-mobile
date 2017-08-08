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

export default class PostForm extends Component {
    state = {
        title: '',
        content: ''
    }
    render() {
        return (
        <View style={styles.form}>
            <TextInput
                style={styles.formInput}
                onChangeText={(title) => this.setState({title})}
                value={this.state.title}
                placeholder='Title'
            />
            <TextInput
                style={styles.formInputLarge}
                onChangeText={(content) => this.setState({content})}
                editable = {true}
                maxLength = {400}
                multiline = {true}
                value = {this.state.content}
                placeholder = 'Post'
            />
            <Button 
                title='Submit Story'
                color='#3e3e3e'
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