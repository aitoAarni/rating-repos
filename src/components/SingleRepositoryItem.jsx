import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import Text from './Text'
import useComments from '../hooks/useComments'
import { FlatList, StyleSheet, View } from 'react-native'
import theme from '../theme'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: theme.colors.separator,
    },
})

const Separator = () => {
    return <View style={styles.separator}></View>
}

const SingleRepositoryItem = () => {
    const { id } = useParams()
    const { repository, loading: loadingRepository } = useRepository(id)
    const {
        commentEdges,
        loading: loadingComments,
        fetchMore,
    } = useComments(id, 5)
    if (loadingRepository || loadingComments) return <Text>loading...</Text>
    const comments =
        !loadingComments && commentEdges
            ? commentEdges.map(edge => edge.node)
            : null

    console.log(comments.length)
    const onEndReached = () => {
        console.log('ayoo')
        fetchMore()
    }
    return (
        <FlatList
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            ListHeaderComponent={() => (
                <View>
                    <RepositoryItem item={repository} githubButton />
                    <Separator />
                </View>
            )}
            data={comments}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <ReviewItem comment={item} />}
            ItemSeparatorComponent={Separator}
        />
    )
}

export default SingleRepositoryItem
