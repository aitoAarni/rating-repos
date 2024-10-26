import { useQuery } from '@apollo/client'
import { GET_USER_ID } from '../graphql/queries'

const useId = (includeReviews = false) => {
    const { data, loading, refetch } = useQuery(GET_USER_ID, {
        fetchPolicy: 'cache-and-network',
        variables: { includeReviews },
    })
    const id = data?.me ? data.me : null
    return { id, loading, refetch }
}

export default useId
