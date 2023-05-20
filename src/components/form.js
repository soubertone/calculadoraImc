import React, {Component} from 'react'
import {StyleSheet, View} from "react-native";
import {TextInput, Text} from "react-native-paper";
import MaterialButton from "./custom/materialButton";
import MaterialTextInput from "./custom/materialTextInput";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textButton: 'Calcular',
            height: null,
            weight: null,
            messageImc: 'Preencha o peso e altura',
            imc: null
        }

        this.setHeight = this.setHeight.bind(this)
        this.setWeight = this.setWeight.bind(this)
        this.setMessageImc = this.setMessageImc.bind(this)
        this.setImc = this.setImc.bind(this)
        this.setTextButton = this.setTextButton.bind(this)
    }

    setTextButton (value) {
        this.setState({textButton: value})
    }

    setHeight (value) {
        this.setState({height: value ? value.replace(',', '.') : value})
    }

    setWeight (value) {
        this.setState({weight: value})
    }

    setMessageImc (value) {
        this.setState({messageImc: value})
    }

    setImc (value) {
        this.setState({imc: value})
    }

    clearFields () {
        this.setHeight(null)
        this.setWeight(null)
        this.setImc(null)
        this.setTextButton("Calcular")
        this.setMessageImc('Preencha o peso e altura')
    }

    calculateImc () {
        this.setImc(
            (this.state.weight / (this.state.height * this.state.height)).toFixed(2)
        )
        this.setTextButton("Limpar")
        this.setMessageImc('Seu peso é: ')
    }

    validateFields () {
        if (this.state.imc) {
            this.clearFields()
        } else if (this.state.height != null && this.state.weight != null) {
            this.calculateImc()
        }
    }

    render() {
        const styles = StyleSheet.create({
            content: {
                borderStyle: "solid",
                borderTopWidth: 5,
                borderTopColor: '#000'
            },
            element: {
                marginHorizontal: 100,
            }
        })
        return (
            <View style={styles.content}>
                <View style={styles.element}>
                    <MaterialTextInput
                        label='Altura'
                        onChangeText={this.setHeight}
                        value={this.state.height}
                        placeHolder='Ex: 1.75'
                        keyboardType='numeric'
                    />
                    <MaterialTextInput
                        label='Peso'
                        onChangeText={this.setWeight}
                        value={this.state.weight}
                        placeHolder='Ex. 65'
                        keyboardType='numeric'
                    />
                </View>

                <View style={styles.element}>
                    <MaterialButton
                        onPress={() => this.validateFields()}
                        title={this.state.textButton}
                    />
                </View>

                <View style={styles.element}>
                    <Text>{this.state.messageImc}</Text>
                    <Text>{this.state.imc}</Text>
                </View>
            </View>
        );
    }
}
