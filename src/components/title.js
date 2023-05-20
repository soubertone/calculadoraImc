import React, { Component } from 'react'
import {StyleSheet, Text, View} from "react-native";

export default class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles = StyleSheet.create({
            header: {
                height: 300,
                backgroundColor: '#fc038c',
                alignItems: "center",
                justifyContent: "center",
            },
            title: {
                fontSize: 30,
                color: '#fff',
                fontWeight: "bold",
            }
        })

        return (
            <View style={styles.header}>
                <Text style={styles.title}>OneBitHealth</Text>
            </View>
        );
    }
}
