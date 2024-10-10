import { View, StyleSheet, Pressable } from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
    },
    header: {
        color: 'white',
        fontSize: 40,
        fontWeight: theme.fontWeights.bold,
    },
})

const AppBar = () => {
    return (
        <Pressable>
            <View style={styles.container}>
                <Text style={styles.header}>Repositories</Text>
            </View>
        </Pressable>
    )
}

export default AppBar
