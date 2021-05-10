import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    /**
     * Animaciones
     */
    const opacity = useRef( new Animated.Value(0) ).current;
    const position = useRef( new Animated.Value(0) ).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start( () => console.log('Animacion terminada') );
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    }

    const startMovingPosition = ( InitPosition: number, duration: number = 300 ) => {

        position.setValue(InitPosition);

        Animated.timing(
            position,
            {
                toValue: 0,
                duration,
                useNativeDriver: true,
                // easing: Easing.bounce
            }
        ).start();
    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }

}
