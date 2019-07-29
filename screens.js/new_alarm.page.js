import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

class NewAlarm extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isDateTimePickerVisible: false
        };
      }
    
      showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
      };
    
      hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
      };
    
      handleDatePicked = date => {
        console.warn("A date has been picked: ", date);
        this.hideDateTimePicker();
      };
    
      render() {
        return (
          <>
            <Button title="Novo alarme" onPress={this.showDateTimePicker} />
            <DateTimePicker
              mode={'datetime'}
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this.handleDatePicked}
              onCancel={this.hideDateTimePicker}
            />
          </>
        );
      }
}

export default NewAlarm;