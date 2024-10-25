import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import theme from '../theme'
import Text from './Text'
import { useFormik } from 'formik'
import * as yup from 'yup'
import useCreateUser from '../hooks/useCreateUser'
import { useNavigate } from 'react-router-native'
import useSignIn from '../hooks/useSignIn'

const styles = StyleSheet.create({
    container: { marginHorizontal: 10 },
    textInput: {
        borderWidth: 1,
        marginTop: 15,
        fontSize: 25,
        padding: 20,
        borderRadius: 6,
        borderColor: theme.colors.lightGray,
    },
    buttonContainer: {
        backgroundColor: theme.colors.primary,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8,
    },
    buttonText: { fontSize: 20, color: 'white' },
})

const validationSchema = yup.object().shape({
    username: yup.string().min(5).max(30).required(),
    password: yup.string().min(5).max(50).required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords don't match")
        .required(),
})

const initialValues = { username: '', password: '', confirmPassword: '' }

const SignUpForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        validateOnChange: true,
        validateOnBlur: true,
    })
    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor="#c0c0c0"
                style={[
                    styles.textInput,
                    {
                        borderColor:
                            formik.errors.username && formik.touched.username
                                ? 'red'
                                : theme.colors.lightGray,
                    },
                ]}
                placeholder="Username"
                value={formik.values.username}
                onBlur={formik.handleBlur('username')}
                onChangeText={formik.handleChange('username')}
            />
            {formik.errors.username && formik.touched.username && (
                <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
            )}
            <TextInput
                secureTextEntry
                placeholderTextColor="#c0c0c0"
                style={[
                    styles.textInput,
                    {
                        borderColor:
                            formik.errors.password && formik.touched.password
                                ? 'red'
                                : theme.colors.lightGray,
                    },
                ]}
                placeholder="Password"
                value={formik.values.password}
                onBlur={formik.handleBlur('password')}
                onChangeText={formik.handleChange('password')}
            />
            {formik.errors.password && formik.touched.password && (
                <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
            )}
            <TextInput
                secureTextEntry
                placeholderTextColor="#c0c0c0"
                style={[
                    styles.textInput,
                    {
                        borderColor:
                            formik.errors.confirmPassword &&
                            formik.touched.confirmPassword
                                ? 'red'
                                : theme.colors.lightGray,
                    },
                ]}
                placeholder="Password confirmation"
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur('confirmPassword')}
                onChangeText={formik.handleChange('confirmPassword')}
            />
            {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                    <Text style={{ color: 'red' }}>
                        {formik.errors.confirmPassword}
                    </Text>
                )}
            <Pressable onPress={formik.handleSubmit}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText} fontWeight="bold">
                        Sign up
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const SignUp = () => {
    const [createUser] = useCreateUser()
    const [signIn] = useSignIn()
    const navigate = useNavigate()
    const onSubmit = async values => {
        await createUser(values)
        await signIn(values)
        navigate('/')
    }
    return <SignUpForm onSubmit={onSubmit} />
}

export default SignUp
