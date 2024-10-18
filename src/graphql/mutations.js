import { gql } from '@apollo/client'

const SIGN_IN = gql`
    mutation Authenticate($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`

export default SIGN_IN
