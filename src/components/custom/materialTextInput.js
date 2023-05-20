import {Text, TextInput} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import React from "react";


const materialTextInput = ({label, onChangeText, value, keyboardType, placeHolder = null}) => {
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
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        marginVertical: 10,
    }
});

export default materialTextInput