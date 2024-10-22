import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'

const SingleRepositoryItem = () => {
    const { id } = useParams()
    const { repository } = useRepository(id)
    console.log(repository)
    return <RepositoryItem item={repository} githubButton />
}

export default SingleRepositoryItem
