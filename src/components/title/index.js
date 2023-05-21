import React, { Component } from 'react'
import {Text, View} from "react-native";
import styles from "./styles";

export default class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>OneBitHealth</Text>
            </View>
        );
    }
}
