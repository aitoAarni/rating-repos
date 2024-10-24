import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import theme from '../theme'
import Text from './Text'
import { useFormik } from 'formik'
import * as yup from 'yup'

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
    username: yup.string().min(1).required(),
    password: yup.string().min(5).required(),
    confirmPassword: yup.string().required(),
})

const initialValues = { username: '', password: '', confirmPassword: '' }

const SignUp = ({ onSubmit }) => {
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
                onChange={formik.handleChange('username')}
            />
            {formik.errors.username && formik.touched.username && (
                <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
            )}
            <TextInput
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
                onChange={formik.handleChange('password')}
            />
            {formik.errors.password && formik.touched.password && (
                <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
            )}
            <TextInput
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
                onChange={formik.handleChange('confirmPassword')}
            />
            {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                    <Text style={{ color: 'red' }}>
                        {formik.errors.confirmPassword}
                    </Text>
                )}
            <Pressable>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText} fontWeight="bold">
                        Sign up
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default SignUp
