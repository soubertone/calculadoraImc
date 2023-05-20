import React, {Component} from 'react'
import {View} from "react-native";
import {TextInput, Text} from "react-native-paper";
import MaterialButton from "./custom/materialButton";

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
        this.setImc = this.setImc.bind(this)
        this.setTextButton = this.setTextButton.bind(this)
    }

    setTextButton (value) {
        this.setState({textButton: value})
    }

    setHeight (value) {
        this.setState({height: value.replace(',', '.')})
    }

    setWeight (value) {
        this.setState({weight: value})
    }

    setImc (value) {
        this.setState({imc: value})
    }

    calculateImc () {
        this.setImc(
            (this.state.weight / (this.state.height * this.state.height)).toFixed(2)
        )
        this.setTextButton("Limpar")
    }

    validateFields () {
        if (this.state.height != null && this.state.weight != null) {
            this.calculateImc()
        }
    }

    render() {
        return (
            <View>
                <View>
                    <Text>Altura</Text>
                    <TextInput
                        placeholder='Ex: 1.75'
                        keyboardType='numeric'
                        keyboardAppearance={"dark"}
                        onChangeText={this.setHeight}
                        value={this.state.height}
                    />
                    <Text>Peso</Text>
                    <TextInput
                        placeholder='Ex: 65'
                        keyboardType='numeric'
                        keyboardAppearance={"dark"}
                        onChangeText={this.setWeight}
                        value={this.state.weight}
                    />
                </View>

                <View>
                    <MaterialButton
                        onPress={() => this.validateFields()}
                        title={this.state.textButton}
                    />
                </View>

                <View>
                    <Text>{this.state.messageImc}</Text>
                    <Text>{this.state.imc}</Text>
                </View>
            </View>
        );
    }
}
