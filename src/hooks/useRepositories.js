import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (order, search, first, onlyCache = false) => {
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: onlyCache ? 'cache-only' : 'cache-and-network',
        variables: { searchKeyword: search, ...order, first },
    })

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

        if (!canFetchMore) return

        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...order,
                searchKeyword: search,
                first,
            },
        })
    }

    const repositories = data?.repositories
    return { repositories, fetchMore: handleFetchMore, loading, ...result }
}

export default useRepositories
