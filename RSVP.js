import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableHighlight,
    Button
} from 'react-native';


export default class RSVP extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22, marginBottom: 22, height: 150}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
          >
         <View style={{marginTop: 22, height: 100}}>
            <Text style={{fontSize: 36}}>Are you able to come?</Text>
            <Button
                title="Yes, I'll make it!"
                color="green"
                onPress={() => { this.setModalVisible(false)}} />
            <Button
                title="No, not this time"
                color="red"
                onPress={() => { this.setModalVisible(false)}} />
         </View>
        </Modal>

        <Button
         title="RSVP"
         color="#8579BC"
         onPress={() => { this.setModalVisible(true)}} />

      </View>
    );
  }
}

const styles = StyleSheet.create({

});