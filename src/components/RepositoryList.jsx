import { FlatList, View, StyleSheet, Pressable, ViewBase } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import useRepositories from '../hooks/useRepositories'
import { useNavigate } from 'react-router-native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: theme.colors.separator,
    },
})

const orderMapping = {
    latest: { orderDirection: 'ASC', orderedBy: 'CREATED_AT' },
    highest: {
        orderDirection: 'DESC',
        orderedBy: 'RATING_AVERAGE',
    },
    lowest: {
        orderDirection: 'ASC',
        orderedBy: 'RATING_AVERAGE',
    },
}

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
    const [orderedBy, setOrderedBy] = useState('latest')
    const { repositories } = useRepositories(orderMapping[orderedBy])
    const navigate = useNavigate()

    // Get the nodes from the edges array
    const repositoryNodes = repositories?.edges
        ? repositories.edges.map(edge => edge.node)
        : []

    return (
        <View>
            <Picker
                selectedValue={orderedBy}
                // eslint-disable-next-line no-unused-vars
                onValueChange={(itemValue, _itemIndex) => {
                    setOrderedBy(itemValue)
                }}
            >
                <Picker.Item label="Latest repositories" value="latest" />
                <Picker.Item
                    label="Highes rated repositories"
                    value="highest"
                />
                <Picker.Item label="Lowest rated repositories" value="lowest" />
            </Picker>
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
        </View>
    )
}

export default RepositoryList
