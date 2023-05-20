import {Text, TextInput} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import React from "react";


const materialTextInput = ({label, onChangeText, value, keyboardType, placeHolder = null}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeHolder}
                keyboardType={keyboardType}
                keyboardAppearance={"dark"}
                onChangeText={onChangeText}
                value={value}
                style={styles.textInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {

    },
    label: {
        marginTop: 25,
        marginVertical: 10,
    }
});

export default materialTextInput