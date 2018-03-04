import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import CheckBox from 'react-native-checkbox';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    navbar: {
        height: 64,
        backgroundColor: '#2196F3',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#DDDDDD',
        paddingHorizontal: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 12,
        color: "white"
    },
    text: {
        marginTop: 130,
        fontSize: 20,
        fontFamily: "sans-serif",
        marginLeft: 40,
        marginRight: 40
    },
    proceed:{
        marginLeft: 40,
        marginTop:50
    },
    proceed1: {
        marginTop: 50,
        alignSelf: 'stretch',
        backgroundColor: '#2196F3',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2979FF',
        marginLeft: 30,
        marginRight: 30,
    },
    text1:{
        color: "white",
        fontSize: 30,
        textAlign:"center",
        fontWeight:"bold"
    }
});

class Home extends  Component {
    state = {isChecked: false};
    checkBoxTest(){
        this.setState({isChecked:!this.state.isChecked})
    }
    render() {
        return (
            <View>
                <Text style={styles.navbar}>Disclaimer</Text>
                <Text style={styles.text}>If you think you are experiencing a medical emergency, call your doctor or 911 immediately.
                    The information contained on  this website is meant to generally promote consumer awareness.
                    Do not disregard or delay following the advice of your doctor
                    or another qualified medical professional because of what you have read on this site.
                </Text>
                <View  style={styles.proceed} >
                    <CheckBox
                        label={'I agree'}
                        value={this.state.isChecked}
                        onChange={() => this.checkBoxTest()}
                    />
                </View>
                <TouchableOpacity style={styles.proceed1} onPress={() =>
                {if (this.state.isChecked) {
                    return Actions.menu()
                }
                    else {
                    Alert.alert("Warning", "You must accept the disclaimer to proceed")
                }}}>
                    <Text style={styles.text1}>Proceed</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;