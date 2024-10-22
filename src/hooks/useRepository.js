import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = ({ repositoryId }) => {
    const { data, loading, refetch } = useQuery(GET_REPOSITORY, {
        fetchPolicy: 'cache-and-network',
        variables: { repositoryId },
    })

    const repository = data ? data.repository : null

    return { repository, loading, refetch }
}

export default useRepository
