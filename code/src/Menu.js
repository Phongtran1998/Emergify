import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Menu = () => {
    return(
        <View>
            <TouchableOpacity onPress={() => Actions.search()}>
                <Text>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.post()}>
                <Text>Post a Review</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Menu;