import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import { useState, useEffect } from 'react'

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: theme.colors.separator,
    },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
    const [repositories, setRepositories] = useState()

    const fetchRepositories = async () => {
        // Replace the IP address part with your own IP address!
        const response = await fetch(
            'http://192.168.1.120:5000/api/repositories'
        )
        const json = await response.json()

        //   console.log(json);

        setRepositories(json)
    }

    useEffect(() => {
        fetchRepositories()
    }, [])

    // Get the nodes from the edges array
    const repositoryNodes = repositories
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
