import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import useRepositories from '../hooks/useRepositories'

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: theme.colors.separator,
    },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
    const { repositories } = useRepositories()

    // Get the nodes from the edges array
    const repositoryNodes = repositories?.edges
        ? repositories.edges.map(edge => edge.node)
        : []
    console.log(repositoryNodes)

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={RepositoryItem}
        />
    )
}

export default RepositoryList
