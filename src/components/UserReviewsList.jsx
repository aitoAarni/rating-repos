import { FlatList, StyleSheet, View } from 'react-native'
import useId from '../hooks/useId'
import Text from './Text'
import ReviewItem from './ReviewItem'
import theme from '../theme'

const sytles = StyleSheet.create({
    separator: { marginVertical: 10, backgroundColor: theme.colors.lightGray },
})

const Separator = () => <View style={sytles.separator}></View>

const UserReviewsList = () => {
    const { me } = useId(true)
    if (!me?.reviews) return <Text>loading</Text>
    const reviews = me.reviews.edges.map(item => {
        const { repository, ...reviewData } = item.node
    
        return {
            ...reviewData,
            user: {
                username: repository.fullName,
            },
        }
    })


    return (
        <FlatList
            data={reviews}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <ReviewItem comment={item} />}
            ItemSeparatorComponent={Separator}
        />
    )
}

export default UserReviewsList
