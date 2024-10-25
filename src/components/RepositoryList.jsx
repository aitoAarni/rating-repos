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

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
    const { repositories } = useRepositories()
    const [orderedBy, setOrderedBy] = useState({
        orderDirection: 'ASC',
        orderedBy: 'CREATED_AT',
    })
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
                    console.log()
                    setOrderedBy(itemValue)
                }}
            >
                <Picker.Item
                    label="Latest repositories"
                    value={{ orderDirection: 'ASC', orderedBy: 'CREATED_AT' }}
                />
                <Picker.Item
                    label="Highes rated repositories"
                    value={{
                        orderDirection: 'DESC',
                        orderedBy: 'RATING_AVERAGE',
                    }}
                />
                <Picker.Item
                    label="Lowest rated repositories"
                    value={{
                        orderDirection: 'ASC',
                        orderedBy: 'RATING_AVERAGE',
                    }}
                />
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
