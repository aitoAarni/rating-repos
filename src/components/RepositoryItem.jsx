import { Image, StyleSheet, View } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.container,
    },
    avatar: {
        width: 80,
        height: 80,
    },
    header: {},
})

const TopOfItem = ({ item }) => {
    return (
        <View>
            <Image
                style={styles.avatar}
                source={{ uri: item.ownerAvatarUrl }}
            />
            <Text
                fontWeight={'bold'}
                fontSize={'subheading'}
                style={styles.header}
            >
                {item.fullName}
            </Text>
        </View>
    )
}

const RepositoryItem = ({ item }) => {
    return (
        <View>
            <TopOfItem item={item} />
            <Text>
                Full name: {item.fullName}
                {'\n'}
                Description: {item.description}
                {'\n'}
                Language: {item.language}
                {'\n'}
                Stars: {item.stargazersCount}
                {'\n'}
                Forks: {item.forksCount}
                {'\n'}
                Reviews: {item.reviewCount}
                {'\n'}
                Rating: {item.ratingAverage}
                {'\n'}
            </Text>
        </View>
    )
}

export default RepositoryItem
