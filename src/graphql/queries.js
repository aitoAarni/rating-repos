import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query PageInfo(
        $first: Int
        $after: String
        $orderDirection: OrderDirection
        $orderBy: AllRepositoriesOrderBy
    ) {
        repositories(
            first: $first
            after: $after
            orderDirection: $orderDirection
            orderBy: $orderBy
        ) {
            pageInfo {
                endCursor
                hasNextPage
                startCursor
            }
            edges {
                cursor
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
    query Repository($repositoryId: ID!, $first: Int, $after: String) {
        repository(id: $repositoryId) {
            reviews(first: $first, after: $after) {
                pageInfo {
                    endCursor
                    hasNextPage
                    startCursor
                }
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
