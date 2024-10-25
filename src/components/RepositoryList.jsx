import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import useRepositories from '../hooks/useRepositories'
import { useNavigate } from 'react-router-native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { TextInput } from 'react-native'
import { useDebounce } from 'use-debounce'

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: theme.colors.separator,
    },
    search: {
        // borderWidth: 1,
        marginTop: 15,
        borderRadius: 6,
        overflow: 'hidden',
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginHorizontal: 15,
    },
    picker: { marginHorizontal: 15 },
})

const orderMapping = {
    latest: { orderDirection: 'ASC', orderBy: 'CREATED_AT' },
    highest: {
        orderDirection: 'DESC',
        orderBy: 'RATING_AVERAGE',
    },
    lowest: {
        orderDirection: 'ASC',
        orderBy: 'RATING_AVERAGE',
    },
}

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
    const [orderedBy, setOrderedBy] = useState('highest')
    const [searchText, setSearchText] = useState('')
    const [searchDebounce] = useDebounce(searchText, 500)
    const { repositories } = useRepositories(
        orderMapping[orderedBy],
        searchDebounce
    )
    const navigate = useNavigate()

    const repositoryNodes = repositories?.edges
        ? repositories.edges.map(edge => edge.node)
        : []

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                caretHidden={true}
                autoComplete="off"
                autoCapitalize="none"
                placeholder="search"
                style={styles.search}
                onChangeText={setSearchText}
                value={searchText}
            />
            <Picker
                style={styles.picker}
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
