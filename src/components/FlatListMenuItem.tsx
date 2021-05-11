import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/interfaces';
import { SpaceItem } from './SpaceItem';

Icon

interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ( { menuItem }: Props ) => {

    /**
     * Hook para navegar entre pantallas
     */
    const navigation = useNavigation();

    /**
     * https://github.com/react-navigation/react-navigation/issues/7839
     */
    const goToScreen = () => {
        navigation.navigate( menuItem.component );
    }

    return (
        <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ () => goToScreen() }
        >
            <View style={ styles.container }>

                <Icon
                    name={ menuItem.icon }
                    color="#5856D6"
                    size={ 23 }
                />
                <Text style={ styles.itemText }>
                    { menuItem.name }
                </Text>

                <SpaceItem />

                <Icon
                    name="chevron-forward-outline"
                    color="#5856D6"
                    size={ 23 }
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 18
    }
});
