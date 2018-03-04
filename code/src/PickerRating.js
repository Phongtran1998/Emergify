import React, { Component } from 'react';
import { View, Picker, Text, TouchableOpacity } from 'react-native';

class PickerRating extends Component{
    state = { user: '' , value: ''};
    updateUser = (user) => {
        this.setState({ user: user });
    };
    render() {
        return (
            <View>
                <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
                    <Picker.Item label="Choose Rating" value="" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                    <Picker.Item label="4" value="4" />
                    <Picker.Item label="5" value="5" />
                </Picker>
            </View>
        );
    }
}

export default PickerRating;