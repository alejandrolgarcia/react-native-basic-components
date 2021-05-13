import React, { useState } from 'react'
import { TextInput, View, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={ styles.globalMargin }>
                        <HeaderTitle title="TextInput" />

                        <TextInput
                            style={ stylesScreen.textInputStyle }
                            placeholder="Ingrese su nombre"
                            autoCorrect={ false }
                            autoCapitalize='words'
                            onChangeText={ (value) => onChange(value, 'name') }
                        />

                        <TextInput
                            style={ stylesScreen.textInputStyle }
                            placeholder="Ingrese su email"
                            autoCapitalize='none'
                            onChangeText={ (value) => onChange(value, 'email') }
                            keyboardType='email-address'
                        />


                        <TextInput
                            style={ stylesScreen.textInputStyle }
                            placeholder="Ingrese su telefono"
                            onChangeText={ (value) => onChange(value, 'phone') }
                            keyboardType='phone-pad'
                        />

                        <View style={ stylesScreen.switchRow }>
                            <Text style={ stylesScreen.switchText }>Is Subscribed</Text>
                            <CustomSwitch isOn={ isSubscribed } onChange={ (value: boolean) => onChange( value, 'isSubscribed') } />
                        </View>

                        <HeaderTitle title={ JSON.stringify( form, null, 3 ) } />

                        <View style={{ height: 50 }} />

                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },

    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },

    switchText: {
        fontSize: 25
    }
});
