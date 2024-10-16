import { useFormik } from 'formik'
import Text from './Text'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        marginHorizontal: 10,
        borderRadius: 6,
        overflow: 'hidden',
        fontSize: 30,
        padding: 10,
        borderColor: theme.colors.lightGray,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 6,
        marginTop: 15,
        padding: 18,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
})

const initialValues = {
    username: '',
    password: '',
}

const SignInForm = ({ onSubmit }) => {
    const formik = useFormik({ initialValues, onSubmit })
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholderTextColor="#c0c0c0"
                placeholder="Username"
                value={formik.values.username}
                onChangeText={formik.handleChange('username')}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#c0c0c0"
                secureTextEntry
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange('password')}
            />
            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText} fontWeight='bold'>Sign in</Text>
            </Pressable>
        </View>
    )
}

const SignIn = () => {
    return <SignInForm onSubmit={onSubmit} />
}

const onSubmit = values => {
    console.log(values)
}

export default SignIn
