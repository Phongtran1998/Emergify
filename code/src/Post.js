import React, { Component } from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Input, CardSection, Card } from "./Components/";
import axios from 'axios'
import PickerRating from './PickerRating';
import PickerCase from "./PickerCase";

const styles = StyleSheet.create({
    proceed1: {
        marginTop: 120,
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


export default class Post extends Component {
    state = { name: '', case: '', price: '', description: ''};
    renderButton() {
        axios.post('https://pbgahml976.execute-api.us-east-1.amazonaws.com/prod/all-hospitals',{
            "city": "washington",
            "state": "dc"
        });
    }
    render(){
        return(
            <View>
                <Card>
                    <CardSection>
                        <Input
                            placeholder={"Name"}
                            label={"Hospital"}
                            onChangeText={(name) => this.setState({name})}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder={"Price"}
                            label={"Price"}
                            onChangeText={(price) => this.setState({price})}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder={"Description"}
                            label={"Description"}
                            onChangeText={(description) => this.setState({description})}
                        />
                    </CardSection>
                    <PickerRating/>
                </Card>
                <TouchableOpacity style={styles.proceed1} onPress={() => this.renderButton()}>
                    <Text style={styles.text1}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

