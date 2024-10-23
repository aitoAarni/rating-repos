import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import Text from './Text'
import useComments from '../hooks/useComments'

const SingleRepositoryItem = () => {
    const { id } = useParams()
    const { repository, loading: loadingRepository } = useRepository(id)
    const { commentEdges, loading: loadingComments } = useComments(id)
    if (loadingRepository) return <Text>loading...</Text>
    console.log(commentEdges)
    const comments = !loadingComments
        ? commentEdges.map(edge => edge.node)
        : null
    console.log(comments)

    return <RepositoryItem item={repository} githubButton />
}

const Comment = ({ comment }) => {
    
}

export default SingleRepositoryItem
