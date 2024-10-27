import { FlatList, StyleSheet, View } from 'react-native'
import useId from '../hooks/useId'
import Text from './Text'
import ReviewItem from './ReviewItem'
import theme from '../theme'
import ReviewsRefetchContext from '../contexts/ReviewsRefetchContext'

const sytles = StyleSheet.create({
    separator: { height: 10, backgroundColor: theme.colors.separator },
})

const Separator = () => <View style={sytles.separator}></View>

const UserReviewsList = () => {
    const { me, refetch } = useId(true)
    if (!me?.reviews) return <Text>loading</Text>
    const reviews = me.reviews.edges.map(item => {
        const { repository, ...reviewData } = item.node

        return {
            ...reviewData,
            user: {
                username: repository.fullName,
            },
            repository: { id: repository.id },
        }
    })

    return (
        <ReviewsRefetchContext.Provider value={refetch}>
            <FlatList
                data={reviews}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <ReviewItem comment={item} buttons />}
                ItemSeparatorComponent={Separator}
            />
        </ReviewsRefetchContext.Provider>
    )
}

export default UserReviewsList
