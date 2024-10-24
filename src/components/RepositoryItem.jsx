import { Image, Pressable, StyleSheet, View } from 'react-native'
import Text from './Text'
import theme from '../theme'
import * as Linking from 'expo-linking'

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingVertical: 4,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    textContainer: {
        marginTop: 10,
        flex: 1,
    },
    bottomContainer: { marginTop: 15 },
    bottomContainerNums: {
        flexDirection: 'row',
    },
    bottomContainerTitles: {
        flexDirection: 'row',
    },
    bottomContainerChildren: {
        flexGrow: 1,
        flexBasis: '25%',
        alignItems: 'center',
    },
    topContainerText: {
        marginVertical: 5,
    },
    avatar: {
        width: 50,
        height: 50,
        marginHorizontal: 15,
        marginTop: 0,
    },
    header: { marginBottom: 5 },
    description: { marginBottom: 5, flexShrink: 1, paddingRight: 5 },
    language: {
        backgroundColor: theme.colors.primary,
        color: 'white',
        alignSelf: 'flex-start',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 7,
        marginTop: 4,
        overflow: 'hidden',
    },
    githubButtonCoontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexGrow: 1,
        backgroundColor: theme.colors.primary,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 7,
    },
    githubButton: { color: 'white', paddingVertical: 10 },
})

const TopOfItem = ({ item }) => {
    return (
        <View style={styles.topContainer}>
            <Image
                style={styles.avatar}
                source={{ uri: item.ownerAvatarUrl }}
            />
            <View style={styles.textContainer}>
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
                            ? item.forksCount.toString()
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

const GithubButton = ({ url }) => {
    const onPress = () => {
        Linking.openURL(url)
    }
    return (
        <Pressable onPress={onPress}>
            <View style={styles.githubButtonCoontainer}>
                <Text fontWeight={'bold'} style={styles.githubButton}>
                    Open in GitHub
                </Text>
            </View>
        </Pressable>
    )
}

const RepositoryItem = ({ item, githubButton }) => {
    console.log('itmmmm<zzzze: ', item)
    if (!item) return <Text>Loading site...</Text>
    return (
        <View style={styles.container}>
            <TopOfItem item={item} />
            <BottomOfItem item={item} />
            {githubButton && <GithubButton url={item.url} />}
        </View>
    )
}

export default RepositoryItem
