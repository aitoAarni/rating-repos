import { useQuery } from '@apollo/client'
import { GET_COMMENTS } from '../graphql/queries'

const useComments = repositoryId => {
    const { data, loading, refetch } = useQuery(GET_COMMENTS, {
        fetchPolicy: 'cache-and-network',
        variables: { repositoryId },
    })
    const commentEdges = !loading ? data.repository.reviews.edges : null
    return { commentEdges, loading, refetch }
}

export default useComments
