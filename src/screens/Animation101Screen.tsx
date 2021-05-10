import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

    return (
        <View style={ styles.container }>
            
            <Animated.View style={{
                ...styles.purpleBox,
                marginBottom: 20,
                opacity,
                transform: [{
                    translateY: position
                }]
            }}/>

            <Button
                title="FadeIn"
                onPress={ () => {
                    fadeIn();
                    startMovingPosition(-200, 1000);
                } }
            />
            <Button
                title="FadeOut"
                onPress={ fadeOut }
            />

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    purpleBox: {
        backgroundColor: 'blue',
        width: 150,
        height: 150,
    }
});
