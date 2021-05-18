import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({ uri, style }: Props ) => {

    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading( false );
        fadeIn( 500 );
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 3
        }}>
            {
                isLoading && 
                    <ActivityIndicator
                        style={{ position: 'absolute' }}
                        color="#5856D6"
                        size={ 25 }
                    />
            }

            <Animated.Image
                source={{ uri }}
                onLoadEnd={ finishLoading }
                style={{
                    ...style as any,
                    // width: '100%',
                    // height: 400,
                    opacity
                }}
            />
        </View>
    )
}
