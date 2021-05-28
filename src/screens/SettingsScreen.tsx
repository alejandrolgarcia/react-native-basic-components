import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext( ThemeContext );

    return (
        <View style={ styles.globalMargin }>
            <HeaderTitle title="Settings" />

            <View style={{ 
                flexDirection: 'row',
                justifyContent: 'space-between',  
            }}>
                <TouchableOpacity
                    onPress={ setLightTheme }
                    activeOpacity={ 0.8 }
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'center'
                    }}>
                        Light
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={ setDarkTheme }
                    activeOpacity={ 0.8 }
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'center'
                    }}>
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
