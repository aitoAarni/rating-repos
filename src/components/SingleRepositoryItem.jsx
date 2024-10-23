import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import Text from './Text'

const SingleRepositoryItem = () => {
    const { id } = useParams()
    console.log('da iidee: ', id)
    const { repository, loading } = useRepository(id)
    if (loading) return <Text>Loading</Text>
    console.log(repository)
    return <RepositoryItem item={repository} githubButton />
}

export default SingleRepositoryItem
