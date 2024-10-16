import { useFormik } from 'formik'
import Text from './Text'
import { View } from 'react-native-web'
import { Pressable, TextInput } from 'react-native'

const initialValues = {
    username: '',
    password: '',
}

const SignInForm = ({ onSubmit }) => {
    const formik = useFormik({ initialValues, onSubmit })
    return (
        <View>
            <TextInput
                placeholder="username"
                value={formik.values.username}
                onChangeText={formik.handleChange}
            />
            <TextInput
                secureTextEntry
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <Pressable onPress={formik.handleSubmit}>
                <Text>Submit</Text>
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
