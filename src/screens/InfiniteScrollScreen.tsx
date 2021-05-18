import React, { useState } from 'react'
import { FlatList, Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle'

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

    const renderItem = ( item: number ) => {
        return (

            <FadeInImage
                uri={ `https://picsum.photos/id/${ item }/500/400` }
                style={{
                    width: '100%',
                    height: 400,
                }}

            />

            // <Image
            //     source={{ uri: `https://picsum.photos/id/${ item }/500/400` }}
            //     style={{
            //         width: '100%',
            //         height: 400
            //     }}

            // />
        )
    }

    const loadMore = () => {
        const newArray: number[] = [];

        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);

    }

    return (
        <View style={{ flex: 1 }}>

            <FlatList
                data={ numbers }
                keyExtractor={ (item) => item.toString() }
                renderItem={ ({ item }) => renderItem(item) }

                ListHeaderComponent={ () => (
                    <View style={{ marginHorizontal: 20 }}>
                        <HeaderTitle title="Infinity Scroll" />
                    </View>
                )}

                onEndReached={ loadMore }
                onEndReachedThreshold={ 0.5 }  // determina en que pundo empezar a cargar la data

                ListFooterComponent={ () => (
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator size={ 25 } color="#5856D6" />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150
    }
});
