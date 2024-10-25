import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import Text from './Text'
import useComments from '../hooks/useComments'
import { FlatList, StyleSheet, View } from 'react-native'
import theme from '../theme'
import formatDate from '../utils/formatDate'

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: theme.colors.separator,
    },
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

const Separator = () => {
    return <View style={styles.separator}></View>
}

const SingleRepositoryItem = () => {
    const { id } = useParams()
    const { repository, loading: loadingRepository } = useRepository(id)
    const { commentEdges, loading: loadingComments } = useComments(id)
    if (loadingRepository || loadingComments) return <Text>loading...</Text>
    const comments =
        !loadingComments && commentEdges
            ? commentEdges.map(edge => edge.node)
            : null

    return (
        <FlatList
            ListHeaderComponent={() => (
                <View>
                    <RepositoryItem item={repository} githubButton />
                    <Separator />
                </View>
            )}
            data={comments}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <Comment comment={item} />}
            ItemSeparatorComponent={Separator}
        />
    )
}

const Comment = ({ comment }) => {
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

export default SingleRepositoryItem
