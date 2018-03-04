import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import CheckBox from 'react-native-checkbox';

import { Actions } from 'react-native-router-flux';

class Home extends  Component {
    state = {isChecked: false};

    checkBoxTest(){
        this.setState({isChecked:!this.state.isChecked})
    }
    render() {
        return (
            <View>
                <Text>Disclaimer</Text>
                <Text>If you think you are experiencing a medical emergency, call your doctor or 911 immediately.
                    The information contained on  this website is meant to generally promote consumer awareness.
                    Do not disregard or delay following the advice of your doctor
                    or another qualified medical professional because of what you have read on this site.
                </Text>
                <View>
                    <CheckBox
                        label={'I agree'}
                        value={this.state.isChecked}
                        onChange={() => this.checkBoxTest()}
                    />
                </View>
                <TouchableOpacity onPress={() =>
                {if (this.state.isChecked) {
                    return Actions.menu()
                }
                    else {
                    Alert.alert("Warning", "You must accept the disclaimer to proceed")
                }}}>
                    <Text>Proceed</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;