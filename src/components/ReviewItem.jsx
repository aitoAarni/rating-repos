import { Pressable, StyleSheet, View } from 'react-native'
import Text from './Text'
import formatDate from '../utils/formatDate'
import theme from '../theme'

const styles = StyleSheet.create({
    componentContainer: { margin: 15, alignItem: 'center' },
    commentContainer: {
        flexDirection: 'row',
    },
    commentRightContainer: { flexShrink: 1 },
    commentLeftContainer: { marginRight: 15 },

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
    viewRepositoryButton: {},
    deleteReviewButton: {},
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
            {buttons && <Buttons comment={comment} />}
        </View>
    )
}

const Buttons = ({ comment }) => {
    const deleteReview = () => {}
    const viewRepository = () => {}

    return (
        <View>
            <Pressable onPress={viewRepository}>
                <View style={styles.viewRepositoryButton}>
                    <Text>View repository</Text>
                </View>
            </Pressable>
            <Pressable onPress={deleteReview}>
                <View style={styles.deleteReviewButton}>
                    <Text>Delete review</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default ReviewItem
