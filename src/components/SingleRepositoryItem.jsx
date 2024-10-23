import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import Text from './Text'

const SingleRepositoryItem = () => {
    const { id } = useParams()
    const { repository, loading } = useRepository(id)
    console.log('loading:' + loading)
    if (loading) return <Text>Loading</Text>
    console.log(repository)
    return <RepositoryItem item={repository} githubButton />
}

export default SingleRepositoryItem
