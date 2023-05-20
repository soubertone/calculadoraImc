import React, { Component } from 'react'
import {StyleSheet, View} from "react-native";
import Form from "./form";

export default class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles = StyleSheet.create({
            content: {
                width: '100%',
                height: '70%',
                backgroundColor: '#fff',
                borderTopStartRadius: 30,
                borderTopEndRadius: 30,
            },
        })

        return (
            <View style={styles.content}>
                <Form />
            </View>
        );
    }
}
