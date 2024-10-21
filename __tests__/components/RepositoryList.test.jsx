import { render, screen, waitFor } from '@testing-library/react-native'
import RepositoryList from '../../src/components/RepositoryList'
import { MockedProvider } from '@apollo/client/testing'
import { GET_REPOSITORIES } from '../../src/graphql/queries'

const mockData = {
    repositories: {
        edges: [
            {
                node: {
                    description: 'Build forms in React, without the tears',
                    fullName: 'jaredpalmer/formik',
                    forksCount: 2789,
                    language: 'TypeScript',
                    ownerAvatarUrl:
                        'https://avatars.githubusercontent.com/u/4060187?v=4',
                    ratingAverage: 90,
                    reviewCount: 5,
                    stargazersCount: 33935,
                },
            },
        ],
    },
}

const mocks = [
    {
        request: {
            query: GET_REPOSITORIES,
        },
        result: {
            data: mockData,
        },
    },
]

describe('RepositoryList displays texts for repositories', () => {
    it("displays repo's name", async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <RepositoryList />
            </MockedProvider>
        )
        await waitFor(() =>
            expect(screen.getByText('jaredpalmer/formik')).toBeDefined()
        )
    })
})
