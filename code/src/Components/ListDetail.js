import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, CardSection} from "./";

const ListDetail = ({ list }) => {
    return(
        <Card>
            <CardSection>
                <ScrollView>
                    <Text style={styles.headerText}>{list.hospitalName}</Text>
                    <Text style={styles.addressText}>{list.address}</Text>
                    <Text style={styles.commentText}>{list.rate}</Text>
                    <Text style={styles.commentText}>Comment:  {list.comment}</Text>
                    <Text style={styles.commentText}>Price: {list.price}</Text>
                </ScrollView>
            </CardSection>
        </Card>
    );
};
const styles = {
    headerText: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#2196F3',
        fontSize: 50
    },
    addressText: {
       fontSize: 20
    },
    commentText: {
        fontSize: 20
    }
};

export default ListDetail;