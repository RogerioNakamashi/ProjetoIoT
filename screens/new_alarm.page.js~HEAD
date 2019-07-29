import React, { Component } from 'react';
import { Button, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import ActionButton from 'react-native-action-button';


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
        console.warn(date.getDate());
        this.hideDateTimePicker();
      };
    
      render() {
        return (
          <>
            <ActionButton
              buttonColor="rgba(231,76,60,1)"
              onPress={() => { this.showDateTimePicker() }}
            />
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