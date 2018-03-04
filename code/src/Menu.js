import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    proceed1: {
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
    text1: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    }
});
const Menu = () => {
    console.disableYellowBox = true;
    return(
        <View>
            <TouchableOpacity style={styles.proceed1} onPress={() => Actions.search()}>
                <Text style={styles.text1}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.proceed1} onPress={() => Actions.post()}>
                <Text style={styles.text1}>Post a Review</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Menu;