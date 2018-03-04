import React from 'react';
import { ScrollView } from 'react-native';

const Card = (props) => {
    return (
        <ScrollView style={styles.containerStyle}>{props.children}</ScrollView>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        marginTop: 10,
    }
};

export { Card };