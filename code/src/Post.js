import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Input, CardSection, Card } from "./Components/";
import PickerRating from './PickerRating';


export default class Post extends Component {
    state = { name: '', case: '', price: '', description: ''};
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
                </Card>
                <Card>
                    <CardSection>
                        <Input
                            placeholder={"Price"}
                            label={"price"}
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
                </Card>
                <TouchableOpacity>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

