import { Alert, Pressable, StyleSheet, View } from 'react-native'
import Text from './Text'
import formatDate from '../utils/formatDate'
import theme from '../theme'
import { useNavigate } from 'react-router-native'
import useDeleteReview from '../hooks/useDeleteReview'
import { useContext } from 'react'
import ReviewsRefetchContext from '../contexts/ReviewsRefetchContext'

const styles = StyleSheet.create({
    componentContainer: { margin: 15, alignItem: 'center' },
    commentContainer: {
        flexDirection: 'row',
    },
    commentRightContainer: { flexShrink: 1 },
    commentLeftContainer: { marginRight: 15 },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        height: 50,
    },

    ratingCircle: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },

    commentRating: { color: theme.colors.primary, fontSize: 25 },
    commentName: { fontSize: 17, marginBottom: 2 },
    commentDate: { color: '#303030', marginBottom: 2, fontSize: 15 },
    commentText: { fontSize: 15 },
    buttons: {
        flex: 1,
        borderRadius: 6,
    },
    buttonsText: { color: 'white', fontSize: 18 },
    viewRepositoryButton: {
        backgroundColor: 'mediumblue',
        marginRight: 10,
    },
    textAlignment: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteReviewButton: { backgroundColor: 'red', marginLeft: 10 },
})

const ReviewItem = ({ comment, buttons = false }) => {
    return (
        <View style={styles.componentContainer}>
            <View style={styles.commentContainer}>
                <View style={styles.commentLeftContainer}>
                    <View style={styles.ratingCircle}>
                        <Text fontWeight={'bold'} style={styles.commentRating}>
                            {comment.rating}
                        </Text>
                    </View>
                </View>
                <View style={styles.commentRightContainer}>
                    <Text fontWeight="bold" style={styles.commentName}>
                        {comment.user.username}
                    </Text>
                    <Text style={styles.commentDate}>
                        {formatDate(comment.createdAt)}
                    </Text>
                    <Text style={styles.commentText}>{comment.text}</Text>
                </View>
            </View>
            {buttons && (
                <Buttons
                    reviewId={comment.id}
                    repositoryId={comment.repository.id}
                />
            )}
        </View>
    )
}

const Buttons = ({ reviewId, repositoryId }) => {
    const refetch = useContext(ReviewsRefetchContext)
    const navigate = useNavigate()
    const deleteReviewMutation = useDeleteReview()
    const deleteReview = async () => {
        await deleteReviewMutation(reviewId)
        refetch()
    }
    const viewRepository = () => {
        navigate(`/repository/${repositoryId}`)
    }

    const deleteReviewAlert = () => {
        Alert.alert(
            'Delete review',
            'Are you sure you want to delete the review?',
            [
                { text: 'cancle', style: 'cancel' },
                { text: 'delete', onPress: deleteReview },
            ]
        )
    }

    return (
        <View style={styles.buttonsContainer}>
            <View style={[styles.buttons, styles.viewRepositoryButton]}>
                <Pressable
                    style={styles.textAlignment}
                    onPress={viewRepository}
                >
                    <Text fontWeight="bold" style={styles.buttonsText}>
                        View repository
                    </Text>
                </Pressable>
            </View>
            <View style={[styles.buttons, styles.deleteReviewButton]}>
                <Pressable
                    style={styles.textAlignment}
                    onPress={deleteReviewAlert}
                >
                    <Text fontWeight="bold" style={styles.buttonsText}>
                        Delete review
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ReviewItem
