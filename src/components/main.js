import React, { Component } from 'react'
import {View} from "react-native";
import Form from "./form";

export default class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Form />
            </View>
        );
    }
}
