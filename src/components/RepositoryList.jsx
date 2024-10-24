import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import useRepositories from '../hooks/useRepositories'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: theme.colors.separator,
    },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
    const { repositories } = useRepositories()
    const navigate = useNavigate()

    // Get the nodes from the edges array
    const repositoryNodes = repositories?.edges
        ? repositories.edges.map(edge => edge.node)
        : []

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => {
                return (
                    <Pressable
                        onPress={() => {
                            navigate(`/repository/${item.id}`)
                        }}
                    >
                        <RepositoryItem item={item} />
                    </Pressable>
                )
            }}
        />
    )
}

export default RepositoryList
