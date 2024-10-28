import { useQuery } from '@apollo/client'
import { GET_COMMENTS } from '../graphql/queries'

const useComments = (repositoryId, first) => {
    const { data, loading, fetchMore, ...result } = useQuery(GET_COMMENTS, {
        fetchPolicy: 'cache-and-network',
        variables: { repositoryId, first },
    })

    const handleFetcMore = () => {
        if (loading || !data?.repository.reviews.pageInfo.hasNextPage) return

        console.log(
            JSON.stringify(data.repository.reviews.pageInfo.hasNextPage)
        )

        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                repositoryId,
                first,
            },
        })
    }

    const commentEdges =
        !loading && data?.repository?.reviews
            ? data.repository.reviews.edges
            : null
    return { commentEdges, loading, fetchMore: handleFetcMore, result }
}

export default useComments
