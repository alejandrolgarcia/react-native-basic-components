import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/interfaces';
import { styles } from '../theme/appTheme';

const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'apps-outline',
        component: 'Animation101Screen' 
    },

    {
        name: 'Animation 102',
        icon: 'card-outline',
        component: 'Animation102Screen' 
    }

]

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20 }}>
                <Text style={ styles.title }>Opciones de Menú</Text>
            </View>
        )
    }

    const itemSeparator = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 10
                }}
            />
        )
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList
                data={ menuItems }
                renderItem={ ({ item }) => <FlatListMenuItem menuItem={ item } />  }
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ () => renderListHeader() }
                ItemSeparatorComponent={ () => itemSeparator() }
            />
        </View>
    )
}
