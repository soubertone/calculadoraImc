import React, {Component} from 'react'
import {FlatList, Keyboard, StyleSheet, Vibration, View} from "react-native";
import MaterialButton from "../custom/materialButton";
import MaterialTextInput from "../custom/materialTextInput";
import ResultIMC from "../custom/resultIMC";
import {Text} from "react-native-paper";
import styles from "./styles";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textButton: 'Calcular',
            height: null,
            weight: null,
            messageImc: null,
            errorMessages: {},
            imc: null,
            listImc: [],
        }

        this.setHeight = this.setHeight.bind(this)
        this.setWeight = this.setWeight.bind(this)
        this.setMessageImc = this.setMessageImc.bind(this)
        this.setErrorMessages = this.setErrorMessages.bind(this)
        this.setImc = this.setImc.bind(this)
        this.setListImc = this.setListImc.bind(this)
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
    setErrorMessages (value) {
        this.setState({ errorMessages: value})
    }

    setListImc (value) {
        let arr = {
            id: new Date().getTime(),
            imc: value
        }
        this.setState({listImc: [ ...this.state.listImc, arr]})
    }
    setImc (value) {
        this.setState({imc: value})
    }

    clearFields () {
        this.setHeight(null)
        this.setWeight(null)
        this.setImc(null)
        this.setTextButton("Calcular")
        this.setMessageImc(null)
    }

    async calculateImc () {
        const imc = (this.state.weight / (this.state.height * this.state.height)).toFixed(2)
        await this.setImc(imc)
        await this.setListImc(imc)
        this.setTextButton("Calcular novamente")
        this.setMessageImc('Seu IMC é: ')
        Keyboard.dismiss()
    }

    async validateFields () {
        if (this.state.imc) {
            this.clearFields()
        } else if (this.state.height != null && this.state.weight != null) {
            await this.calculateImc()
        } else {
            let errors = {}
            if (!this.state.height) {
                errors.height = '*Campo Obrigatório'
            }

            if (!this.state.weight) {
                errors.weight = '*Campo Obrigatório'
            }
            await Vibration.vibrate()
            await this.setErrorMessages(errors)
        }
    }

    render() {
        const ItemList = ({title}) => (
            <View style={styles.viewList}>
                <Text style={styles.textList}>
                    {title}
                </Text>
            </View>
        )
        return (
            <View style={styles.content}>
                {this.state.imc == null ?
                    <View>
                        <View style={styles.element}>
                            <MaterialTextInput
                                label='Altura'
                                onChangeText={this.setHeight}
                                value={this.state.height}
                                placeHolder='Ex: 1.75'
                                keyboardType='numeric'
                                errorMessage={this.state.errorMessages.height}
                            />
                            <MaterialTextInput
                                label='Peso'
                                onChangeText={this.setWeight}
                                value={this.state.weight}
                                placeHolder='Ex. 65'
                                keyboardType='numeric'
                                errorMessage={this.state.errorMessages.weight}
                            />
                        </View>

                        <View style={styles.element}>
                            <MaterialButton
                                onPress={() => this.validateFields()}
                                title={this.state.textButton}
                            />
                        </View>
                    </View>
                    :
                    <View>
                        <ResultIMC
                            resultImc={this.state.imc}
                            resultMessageImc={this.state.messageImc}
                        />
                        <View style={styles.element}>
                            <MaterialButton
                                onPress={() => this.validateFields()}
                                title={this.state.textButton}
                            />
                        </View>
                    </View>
                }

                <View style={styles.viewList}>
                    <FlatList
                        data={this.state.listImc}
                        renderItem={({item}) => <ItemList title={item.imc} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        );
    }
}
