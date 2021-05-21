import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';

/**
 * Obtener tamaño de la pantalla
 */

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export const SlidesScreen = () => {

    const navigator = useNavigation();
    const [activeSlide, setActiveSlide] = useState(0);
    const [isBottonVisible, setIsBottonVisible] = useState( false );

    const { opacity, fadeIn } = useAnimation();

    const renderItem = ( item: Slide ) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={ item.img }
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'
                    }}
                />
                <Text style={ styles.title }>{ item.title }</Text>
                <Text style={ styles.subTitle }>{ item.desc }</Text>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 50
            }}
        >
            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={ items }
                renderItem={ ({ item }: any ) => renderItem(item) }
                sliderWidth={ screenWidth }
                itemWidth={ screenWidth }
                layout="default"
                onSnapToItem={ (index) => {
                    setActiveSlide( index );
                    
                    if ( index === items.length - 1 ) {
                        setIsBottonVisible( true );
                        fadeIn(500);
                    }
                }}
            />

            <View style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Pagination
                    dotsLength={ items.length }
                    activeDotIndex={ activeSlide }
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: '#5856D6'
                    }}
                />

                {
                    isBottonVisible && (

                        <Animated.View style={{
                            opacity
                        }}>
                            <TouchableOpacity
                                activeOpacity={ 0.9 }
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: '#5856D6',
                                    width: 125,
                                    height: 50,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onPress={ () => navigator.navigate('HomeScreen')}
                            >
                                <Text style={{
                                    fontSize: 20,
                                    color: 'white'
                                }}>
                                    Iniciar
                                </Text>
                                <Icon
                                    name="chevron-forward-outline"
                                    color="white"
                                    size={ 35 }
                                />
                            </TouchableOpacity>
                        </Animated.View>

                    )
                }
                
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    subTitle: {
        fontSize: 16
    }
});
