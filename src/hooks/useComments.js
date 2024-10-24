import { useQuery } from '@apollo/client'
import { GET_COMMENTS } from '../graphql/queries'

const useComments = repositoryId => {
    const { data, loading, refetch } = useQuery(GET_COMMENTS, {
        fetchPolicy: 'cache-and-network',
        variables: { repositoryId },
    })
    console.log('1111111111111')
    const commentEdges =
        !loading && data?.repository?.reviews
            ? data.repository.reviews.edges
            : null
    console.log('22222222222222222')
    return { commentEdges, loading, refetch }
}

export default useComments
