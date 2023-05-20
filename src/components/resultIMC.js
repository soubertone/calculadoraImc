import React, { Component } from 'react'
import {Text, View} from "react-native";

export default class ResultIMC extends Component {
    constructor(props) {
        super(props);

        this.props = {
            ...props
        }
    }

    render() {
        return (
            <View>
                <Text>{this.props.resultMessageImc}</Text>
                <Text>{this.props.resultImc}</Text>
            </View>
        );
    }
}
