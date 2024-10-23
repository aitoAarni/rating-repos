import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query Edges {
        repositories {
            edges {
                node {
                    id
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

export const GET_REPOSITORY = gql`
    query Query($repositoryId: ID!) {
        repository(id: $repositoryId) {
            description
            forksCount
            fullName
            language
            ownerAvatarUrl
            ratingAverage
            reviewCount
            stargazersCount
            url
        }
    }
`

export const GET_COMMENTS = gql`
    query Node($repositoryId: ID!) {
        repository(id: $repositoryId) {
            reviews {
                edges {
                    node {
                        createdAt
                        id
                        rating
                        text
                        user {
                            username
                        }
                    }
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
