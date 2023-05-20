import React from 'react'
import {Alert, Share, StyleSheet, Text, View} from "react-native";
import ShareButton from "./shareButton";

function shareDispatch (imc) {
    Share.share({
        message: `Seu IMC foi calculado pelo OneBitHealth, ele está atualmente em ${imc}`
    }).then(r => {
        if (r.activityType) {
            Alert.alert('Parabens, voce compartilhou seu IMC!')
        }
    })
}

export default function ResultIMC ({ resultMessageImc, resultImc = null }) {
    return (
        <View style={styles.content}>
            <Text style={resultImc ? styles.elementMessageSuccess: styles.elementMessageAlert}>
                {resultMessageImc}
            </Text>
            <Text style={styles.elementIMC}>
                {resultImc}
            </Text>

            {resultImc ? (
                <ShareButton onPress={() => shareDispatch(resultImc)} />
            ) : ''}
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
        fontWeight: "bold",
        marginTop: 30,
        textTransform: "uppercase",
        textShadowColor: '#000',
        textShadowRadius: .4,
        fontSize: 30,
        color: '#f542e0',
    },
    elementIMC: {
        fontWeight: "bold",
        textTransform: "uppercase",
        textShadowColor: '#000',
        textShadowRadius: 1.5,
        fontSize: 70,
        color: '#f542e0',
    },
    elementShareButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#01ADDE97'
    },
    elementShareButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold",
    }
})
