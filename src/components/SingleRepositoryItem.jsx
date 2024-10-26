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
            renderItem={({ item }) => <ReviewItem comment={item} />}
            ItemSeparatorComponent={Separator}
        />
    )
}

export default SingleRepositoryItem
