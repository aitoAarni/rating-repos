import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'
import { Link } from 'react-router-native'
import useId from '../hooks/useId'
import useAuthStorage from '../contexts/useAuthStorage'
import { useApolloClient } from '@apollo/client'

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

const SignOutLink = () => {
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()
    const signOut = () => {
        authStorage.removeAccessToken()
        apolloClient.resetStore()
    }
    return (
        <Pressable onPress={signOut}>
            <Text style={styles.header}>Sign out</Text>
        </Pressable>
    )
}

const SignInLink = () => {
    return (
        <Link to="/signIn">
            <Text style={styles.header}> Sign In </Text>
        </Link>
    )
}

const CreateReviewLink = () => {
    return (
        <Link to="/createReview">
            <Text style={styles.header}>Create a review</Text>
        </Link>
    )
}

const SignUpLink = () => {
    return (
        <Link to="/signUp">
            <Text style={styles.header}>Sign up</Text>
        </Link>
    )
}

const AppBar = () => {
    const { id } = useId()
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                {
                    <View style={styles.container}>
                        <Link to="/">
                            <Text style={styles.header}>Repositories</Text>
                        </Link>
                        {id && <CreateReviewLink />}
                        {id ? <SignOutLink /> : <SignInLink />}
                        {!id && <SignUpLink />}
                    </View>
                }
            </ScrollView>
        </View>
    )
}

export default AppBar
