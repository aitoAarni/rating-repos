import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (order, search) => {
    const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-first',
        variables: { searchKeyword: search, ...order },
    })

    const repositories = data ? data.repositories : null
    return { repositories, loading, refetch }
}

export default useRepositories
