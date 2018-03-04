import React, { Component } from 'react';
import { View, Picker, Text, TouchableOpacity } from 'react-native';

class PickerCase extends Component{
    state = { user: '' };
    updateUser = (user) => {
        this.setState({ user: user });
    };
    render() {
        return (
            <View>
                <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
                    <Picker.Item label="Choose case" value="" />
                    <Picker.Item label="Asthma" value="asthma" />
                    <Picker.Item label="Broken Finger" value="broken-finger" />
                    <Picker.Item label="Severe Stomachache" value="severe-stomachache" />
                </Picker>
                <TouchableOpacity>
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default PickerCase;

