import React from 'react'
import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: 'destructive'
                },
                { 
                    text: "OK", onPress: () => console.log("OK Pressed") 
                }
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('onDismis')
            }
        );
    }

    // Only IOS
    const showPromp = () => {
        // Alert.prompt(
        //     '¿Está seguro?',
        //     'Esta acción no se puede revertir',
        //     ( value: string ) => console.log('info: ', value),
        //     'secure-text',
        //     'Hola Mundo',
        //     'number-pad'
        // )

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={ styles.globalMargin } >
            <HeaderTitle title="Alert Component" />

            <Button
                title="Mostrar alerta"
                onPress={ showAlert }
            />

            <View style={{ height: 10 }} />

            <Button
                title="Mostrar Promp"
                onPress={ showPromp }
            />

        </View>
    )
}
