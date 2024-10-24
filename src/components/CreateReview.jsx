import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import * as yup from 'yup'
import { useFormik } from 'formik'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
    container: { marginHorizontal: 20 },
    textInput: {
        borderWidth: 1,
        marginTop: 20,
        fontSize: 30,
        borderRadius: 6,
        padding: 20,
        overflow: 'hidden',
    },
    buttonContainer: {
        marginTop: 20,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 10,
    },
    buttonText: { color: 'white', fontSize: 30 },
})

const validationSchema = yup.object().shape({})

const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    review: '',
}

const CreateReviewForm = ({ onSubmit }) => {
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
                value={formik.values.ownerName}
                onBlur={formik.handleBlur('ownerName')}
                onChangeText={formik.handleChange('ownerName')}
                style={[
                    styles.textInput,
                    {
                        borderColor:
                            formik.touched.ownerName && formik.errors.ownerName
                                ? 'red'
                                : theme.colors.lightGray,
                    },
                ]}
                placeholder="Repository owner name"
            />
            {formik.touched.ownerName && formik.errors.ownerName && (
                <Text style={{ color: 'red' }}>{formik.errors.ownerName}</Text>
            )}
            <TextInput
                value={formik.values.repositoryName}
                onBlur={formik.handleBlur('repositoryName')}
                onChangeText={formik.handleChange('repositoryName')}
                style={[
                    styles.textInput,
                    {
                        borderColor:
                            formik.touched.repositoryName &&
                            formik.errors.repositoryName
                                ? 'red'
                                : theme.colors.lightGray,
                    },
                ]}
                placeholder="Repository name"
            />
            {formik.touched.repositoryName && formik.errors.repositoryName && (
                <Text style={{ color: 'red' }}>
                    {formik.errors.repositoryName}
                </Text>
            )}
            <TextInput
                value={formik.values.rating}
                onBlur={formik.handleBlur('rating')}
                onChangeText={formik.handleChange('rating')}
                style={[
                    styles.textInput,
                    {
                        borderColor:
                            formik.touched.rating && formik.errors.rating
                                ? 'red'
                                : theme.colors.lightGray,
                    },
                ]}
                placeholder="Rating between 0 and 100"
            />
            {formik.touched.rating && formik.errors.rating && (
                <Text style={{ color: 'red' }}>{formik.errors.rating}</Text>
            )}
            <TextInput
                value={formik.values.review}
                onBlur={formik.handleBlur('review')}
                onChangeText={formik.handleChange('review')}
                style={[
                    styles.textInput,
                    {
                        borderColor:
                            formik.touched.review && formik.errors.review
                                ? 'red'
                                : theme.colors.lightGray,
                    },
                ]}
                placeholder="Review"
            />
            {formik.touched.review && formik.errors.review && (
                <Text style={{ color: 'red' }}>{formik.errors.review}</Text>
            )}
            <Pressable onPress={onSubmit}>
                <View style={styles.buttonContainer}>
                    <Text fontWeight="bold" style={styles.buttonText}>
                        Create a review
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const CreateReview = () => {
    return <CreateReviewForm />
}

export default CreateReview