import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ListDetail from './Components/ListDetail';

export default class Result extends Component {
    state = { list: {} };
    componentDidMount(){
        axios.get('https://pbgahml976.execute-api.us-east-1.amazonaws.com/prod/all-hospitals')
            .then(response => {
                this.setState({ list: response.data });
        })
    }

    renderList(){
        const list = Object.values(this.state.list);
        console.warn(list);
        return (
            Object.values(this.state.list).map(list => <ListDetail list={list}/>)
        );
    }
    render(){
        console.warn(this.state.list);
        return(
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        );
    }
}