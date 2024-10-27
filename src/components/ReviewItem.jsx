import { StyleSheet, View } from 'react-native'
import Text from './Text'
import formatDate from '../utils/formatDate'
import theme from '../theme'

const styles = StyleSheet.create({
    commentContainer: {
        flexDirection: 'row',
        margin: 15,
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
})

const ReviewItem = ({ comment }) => {
    return (
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
    )
}

export default ReviewItem
