import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query Edges {
        repositories {
            edges {
                node {
                    description
                    forksCount
                    fullName
                    language
                    ownerAvatarUrl
                    ratingAverage
                    reviewCount
                    stargazersCount
                }
            }
        }
    }
`

export const GET_USER_ID = gql`
    query Me {
        me {
            id
        }
    }
`
