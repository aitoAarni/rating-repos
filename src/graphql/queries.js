import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query Repositories(
        $orderDirection: OrderDirection
        $orderBy: AllRepositoriesOrderBy
        $searchKeyword: String
    ) {
        repositories(
            orderDirection: $orderDirection
            orderBy: $orderBy
            searchKeyword: $searchKeyword
        ) {
            edges {
                node {
                    description
                    forksCount
                    fullName
                    id
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
    query getCurrentUser($includeReviews: Boolean = false) {
        me {
            id
            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        createdAt
                        id
                        rating
                        text
                        repository {
                            fullName
                            ownerName
                            id
                        }
                    }
                }
            }
        }
    }
`
