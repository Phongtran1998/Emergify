import React, { Component } from 'react';
import { StyleSheet, View, Picker, Text, TouchableOpacity } from 'react-native';
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
    proceed: {
        marginTop: 150,
        alignSelf: 'stretch',
        backgroundColor: '#2196F3',
        borderWidth: 1,
        borderColor: '#2979FF',
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 10,
        paddingBottom: 10
    },
    proceed1: {
        marginTop: 150,
        alignSelf: 'stretch',
        backgroundColor: '#dbdddf',
        borderWidth: 1,
        borderColor: '#676767',
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 10,
        paddingBottom: 10
    },
    text1: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
    }
});

class PickerCase extends Component{
    state = { user: '' };
    updateUser = (user) => {
        this.setState({ user: user });
    };
    render() {
        return (
            <View>
                <Picker style={styles.proceed1} selectedValue={this.state.user} onValueChange={this.updateUser}>
                    <Picker.Item label="Choose case" value=""/>
                    <Picker.Item label="Asthma" value="asthma" />
                    <Picker.Item label="Broken Finger" value="broken-finger" />
                    <Picker.Item label="Severe Stomachache" value="severe-stomachache" />
                </Picker>
                <TouchableOpacity style={styles.proceed} onPress={() => Actions.result()}>
                    <Text style={styles.text1}>Search</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default PickerCase;

