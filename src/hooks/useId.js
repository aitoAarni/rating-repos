import { useQuery } from '@apollo/client'
import { GET_USER_ID } from '../graphql/queries'

const useId = () => {
    const { data, loading, refetch } = useQuery(GET_USER_ID, {
        fetchPolicy: 'cache-and-network',
    })
    const id = data?.me ? data.me.id : null
    return { id, loading, refetch }
}

export default useId
