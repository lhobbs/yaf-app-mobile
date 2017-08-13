import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class DailyVerse extends Component {
    state = {
        verses: [{id: 1, loc: 'Romans 8:37', verse: 'In all these things we are more than conquerors'}, 
                {id: 2, loc: 'Philippians 1:6', verse: 'Being confident in this very thing that he who hath begun a good work in you will continue to do so until the day of Jesus Christ'},
                {id: 3, loc: 'Ephesians 3:20', verse: 'Now unto him who is able to do exceedingly abundant above all that we ask or think'}],
        selectedVerse: null
    }
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.verse}>{this.state.verses[1].verse}</Text>
            <Text style={styles.loc}>{this.state.verses[1].loc}</Text>
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
    },
verse: {
    color: '#2E2759',
    fontSize: 14,
    fontFamily: 'sans-serif-condensed'
},
loc: {
    color: '#70903C',
    fontSize: 12,
    alignSelf: 'flex-end'
}
});