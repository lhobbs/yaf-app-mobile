import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    // ListView,
    FlatList,
    SectionList,
    ListItem,
    H1,
    Header,
    Picker,
    Switch
} from 'react-native';

export default class NotificationSettings extends Component {
    static navigationOptions = {
        title: 'Notifications',
        headerStyle: {backgroundColor: '#3B3273'},
        headerTitleStyle: {color: 'white'}
    }
    state = {
        data: [
            {data: [{title: 'Upcoming event', key: 2, value: true}, {title: 'New Post', key: 7, value: false}, {title: 'New Prayer Request', key: 89, value: true}], title: 'MOBILE', key: 1},
            {data: [{title: 'Upcoming event', key: 3, value: true}], title: 'EMAIL', key: 4},
              ]
    }
    renderItem(item) {
        return <View>
                <Text style={styles.item}>{item.item.title}</Text>
                <Switch
                    //style={{alignSelf: 'flex-end'}}
                    value={item.item.value}
                    onValueChange={(v) => (v)} />
               </View>
    }
    renderSection(section) {
        return <Text style={styles.sectionHeader}>{section.section.title}</Text>
    }
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSection}
                    sections={this.state.data}
                    SectionSeparatorComponent={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    // backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});