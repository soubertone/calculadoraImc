import React, { Component } from 'react'
import {StyleSheet, Text, View} from "react-native";

export default function ResultIMC ({ resultMessageImc, resultImc = null }) {
    return (
        <View style={styles.content}>
            <Text style={resultImc ? styles.elementMessageSuccess: styles.elementMessageAlert}>
                {resultMessageImc}
            </Text>
            <Text style={styles.elementIMC}>
                {resultImc}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        alignItems: "center",
        marginHorizontal: 100,
    },
    elementMessageAlert: {
        color: '#f54260',
        fontSize: 18,
    },
    elementMessageSuccess: {
        marginTop: 30,
        textTransform: "uppercase",
        textShadowColor: '#000',
        textShadowRadius: .4,
        fontSize: 30,
        color: '#f542e0',
    },
    elementIMC: {
        textTransform: "uppercase",
        textShadowColor: '#000',
        textShadowRadius: 1.5,
        fontSize: 70,
        color: '#f542e0',
    }
})
