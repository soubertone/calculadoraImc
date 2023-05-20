import React, { Component } from 'react'
import {StyleSheet, Text, View} from "react-native";

export default class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles = StyleSheet.create({
            header: {
                height: '30%',
                alignItems: "center",
                justifyContent: "center",
            },
            title: {
                fontSize: 30,
                opacity: .8,
                textShadowRadius: 2.5,
                textShadowColor: '#000',
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
