import { useFormik } from 'formik'
import Text from './Text'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import theme from '../theme'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-native'

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(1, 'Username must be at least 1 character')
        .required('Username is required'),
    password: yup
        .string()
        .min(1, 'Password must have at least 5 characters')
        .required('Password is required'),
})

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    input: {
        borderWidth: 1,
        marginTop: 15,
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

export const SignInForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        validateOnBlur: true,
        validateOnChange: true,
    })
    return (
        <View style={styles.container}>
            <TextInput
                style={[
                    styles.input,
                    {
                        borderColor:
                            formik.touched.username && formik.errors.username
                                ? 'red'
                                : theme.colors.lightGray,
                    },
                ]}
                placeholderTextColor="#c0c0c0"
                placeholder="Username"
                value={formik.values.username}
                onBlur={formik.handleBlur('username')}
                onChangeText={formik.handleChange('username')}
            />
            {formik.touched.username && formik.errors.username && (
                <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
            )}
            <TextInput
                style={[
                    styles.input,
                    {
                        borderColor:
                            formik.touched.password && formik.errors.password
                                ? 'red'
                                : theme.colors.lightGray,
                    },
                ]}
                placeholderTextColor="#c0c0c0"
                secureTextEntry
                placeholder="Password"
                value={formik.values.password}
                onBlur={formik.handleBlur('password')}
                onChangeText={formik.handleChange('password')}
            />
            {formik.touched.password && formik.errors.password && (
                <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
            )}
            <Pressable style={styles.button} onPress={formik.handleSubmit}>
                <Text style={styles.buttonText} fontWeight="bold">
                    Sign in 
                </Text>
            </Pressable>
        </View>
    )
}

const SignIn = () => {
    const [signIn] = useSignIn()
    const navigate = useNavigate()
    const onSubmit = async values => {
        const { username, password } = values
        try {
            // eslint-disable-next-line no-unused-vars
            const result = await signIn({ username, password })
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }
    return <SignInForm onSubmit={onSubmit} />
}

export default SignIn
