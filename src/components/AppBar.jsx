import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBar,
        flexDirection: 'row',
    },
    header: {
        color: 'white',
        fontSize: 15,
        fontWeight: theme.fontWeights.bold,
        marginLeft: 10,
    },
})

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                {
                    <View style={styles.container}>
                        <Link to="/">
                            <Text style={styles.header}>Repositories</Text>
                        </Link>
                        <Link to="/signIn">
                            <Text style={styles.header}> Sign In </Text>
                        </Link>
                    </View>
                }
            </ScrollView>
        </View>
    )
}

export default AppBar
