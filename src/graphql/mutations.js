import { gql } from '@apollo/client'

const SIGN_IN = gql`
    mutation Authenticate($credentials: AuthenticateInput) {
        authenticate(credentials: $credentials) {
            accessToken
        }
    }
`

const CREATE_REVIEW = gql`
    mutation CreateReview($review: CreateReviewInput) {
        createReview(review: $review) {
            repositoryId
        }
    }
`

const CREATE_USER = gql`
    mutation CreateUser($user: CreateUserInput) {
        createUser(user: $user) {
            id
        }
    }
`

export { SIGN_IN, CREATE_REVIEW, CREATE_USER }
