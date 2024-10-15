import { Image, StyleSheet, View } from 'react-native'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.container,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    bottomContainer: {},
    bottomContainerNums: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexGrow: 1,
    },
    bottomContainerTitles: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexGrow: 1,
    },
    bottomContainerChildren: {
        flexGrow: 1,
    },
    avatar: {
        width: 80,
        height: 80,
    },
    header: {},
    description: {},
    language: {},
})

const TopOfItem = ({ item }) => {
    return (
        <View style={styles.topContainer}>
            <Image
                style={styles.avatar}
                source={{ uri: item.ownerAvatarUrl }}
            />
            <View>
                <Text
                    fontWeight={'bold'}
                    fontSize={'subheading'}
                    style={styles.header}
                >
                    {item.fullName}
                </Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.language}>{item.language}</Text>
            </View>
        </View>
    )
}
const BottomOfItem = ({ item }) => {
    return (
        <View style={styles.bottomContainer}>
            <View style={styles.bottomContainerNums}>
                <View style={styles.bottomContainerChildren}>
                    <Text fontWeight={'bold'}>
                        {item.stargazersCount < 1000
                            ? item.stargazersCount.toString()
                            : (item.stargazersCount / 1000).toFixed(1) + 'k'}
                    </Text>
                </View>
                <View style={styles.bottomContainerChildren}>
                    <Text fontWeight={'bold'}>
                        {item.forksCount < 1000
                            ? item.forksCountj.toString()
                            : (item.forksCount / 1000).toFixed(1) + 'k'}{' '}
                    </Text>
                </View>
                <View style={styles.bottomContainerChildren}>
                    <Text fontWeight={'bold'}>{item.reviewCount}</Text>
                </View>
                <View style={styles.bottomContainerChildren}>
                    <Text fontWeight={'bold'}>{item.ratingAverage}</Text>
                </View>
            </View>
            <View style={styles.bottomContainerTitles}>
                <View style={styles.bottomContainerChildren}>
                    <Text>Stars</Text>
                </View>
                <View style={styles.bottomContainerChildren}>
                    <Text>Forks</Text>
                </View>
                <View style={styles.bottomContainerChildren}>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.bottomContainerChildren}>
                    <Text>Rating</Text>
                </View>
            </View>
        </View>
    )
}

const RepositoryItem = ({ item }) => {
    return (
        <View>
            <TopOfItem item={item} />
            <BottomOfItem item={item} />
        </View>
    )
}

export default RepositoryItem
