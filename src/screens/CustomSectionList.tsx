import React, { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme'

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin" ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman" ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", ]
    }
];

export const CustomSectionList = () => {

    const { theme: { colors } } = useContext( ThemeContext );

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            {/*  */}
            <SectionList
                sections={ casas }
                keyExtractor={ ( item, index ) => item+index }

                ListHeaderComponent={ () => <HeaderTitle title="Section List" /> }
                ListFooterComponent={ () => (
                    <View style={{ marginBottom: 50 }}>
                        <HeaderTitle title={ casas.length + ' Productoras' }/>
                    </View>
                )}

                renderItem={ ({ item }) => (
                    <Text style={{ fontSize: 20, marginVertical: 10, color: colors.text }}>{ item }</Text> 
                )}
                stickySectionHeadersEnabled
                renderSectionHeader={ ({ section: { casa }}) => (
                    <View style={{ backgroundColor: colors.background }}>
                        <HeaderTitle title={ casa } />
                    </View>
                )}
                renderSectionFooter={ ({ section }) => (
                    <HeaderTitle title={ section.data.length + ' Personajes' } />
                )}

                SectionSeparatorComponent={ () => <ItemSeparator /> }

                showsVerticalScrollIndicator={ false }
            />
        </View>
    )
}
