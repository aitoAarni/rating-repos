import { Text } from "react-native"

const RepositoryItem = ({item}) => {
    return (
        <Text>
            Full name: {item.fullName}
            Description: {item.description}
            Language: {item.language}
            Stars: {item.stargazersCount}
            Forks: {item.forksCount}
            Reviews: {item.reviewCount}
            Rating: {item.ratingAverage}

        </Text>
    )
}

export default RepositoryItem