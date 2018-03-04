import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
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
                    alert("You must check the box to proceed")
                }}}>
                    <Text>Proceed</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;