import { useMutation } from '@apollo/client'
import SIGN_IN from '../graphql/mutations'

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN)

    const signIn = async ({ username, password }) => {
        console.log(`signIn func username: ${username}, password: ${password}`)
        return mutate({ variables: { credentials: { username, password } } })
    }

    return [signIn, result]
}

export default useSignIn
