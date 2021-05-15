import React, { useState } from 'react'
import { Button, View, StyleSheet, Modal, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={ styles.globalMargin } >
            
            <HeaderTitle title="Modal Screen" />

            <Button
                title="Abrir modal"
                onPress={ () => setIsVisible(true) }
            />

            <Modal
                animationType='fade'
                visible={ isVisible }
                transparent
            >
                <View style={ modalStyles.modalBackground }>

                    <View style={ modalStyles.modalBody }>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Titulo del Modal</Text>
                        <Text style={{ fontSize: 15, fontWeight: '300', marginVertical: 10 }}>Este es el cuerpo del Modal</Text>
                        <Button
                            title="Cerrar"
                            onPress={ () => setIsVisible( false ) }
                        />
                    </View>

                </View>

            </Modal>

        </View>
    )
}

const modalStyles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        // height: 200,
        // width: 200,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalBody: {
        width: 300,
        height: 200,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.25, // IOS
        elevation: 10,       // Android
        borderRadius: 5
    }
});
