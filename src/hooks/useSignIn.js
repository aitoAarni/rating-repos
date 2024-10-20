import { ApolloClient, useMutation } from '@apollo/client'
import SIGN_IN from '../graphql/mutations'
import useAuthStorage from '../contexts/useAuthStorage'

const useSignIn = () => {
    const authStorage = useAuthStorage()
    const [mutate, result] = useMutation(SIGN_IN)

    const signIn = async ({ username, password }) => {
        const { data } = await mutate({
            variables: { credentials: { username, password } },
        })
        await authStorage.setAccessToken(data.authenticate.accessToken)
        ApolloClient.resetClient()
        return data
    }

    return [signIn, result]
}

export default useSignIn
