import {Text, TextInput} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import React from "react";


const materialTextInput = ({label, onChangeText, value, keyboardType, placeHolder = null, errorMessage = null}) => {
    return (
        <View>
            <TextInput
                placeholder={placeHolder}
                keyboardType={keyboardType}
                keyboardAppearance={"dark"}
                onChangeText={onChangeText}
                value={value}
                style={styles.textInput}
                dense={true}
                label={label}
            />
            {errorMessage ?
                <Text style={styles.errorText}>
                    {errorMessage}
                </Text>
                : null }
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        marginTop: 15,
        marginVertical: 10,
        borderRadius: 5,
    },
    errorText: {
        color: 'red',
    },
});

export default materialTextInput