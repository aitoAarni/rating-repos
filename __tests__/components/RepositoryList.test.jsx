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
    beforeEach(() => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <RepositoryList />
            </MockedProvider>
        )
    })
    it("displays repo's name", async () => {
        await waitFor(() =>
            expect(screen.getByText('jaredpalmer/formik')).toBeDefined()
        )
    })

    it("displays repo's description", async () => {
        await waitFor(() => {
            expect(
                screen.getByText('Build forms in React, without the tears')
            ).toBeDefined()
        })
    })

    it("displays repo's language", async () => {
        await waitFor(() => {
            expect(screen.getByText('TypeScript')).toBeDefined()
        })
    })
    it("displays repo's forks", async () => {
        await waitFor(() => {
            expect(screen.getByText('2.8k')).toBeDefined()
        })
    })

    it("displays repo's startGazerCount", async () => {
        await waitFor(() => {
            expect(screen.getByText('33.9k')).toBeDefined()
        })
    })
    it("displays repo's rating average", async () => {
        await waitFor(() => {
            expect(screen.getByText('90')).toBeDefined()
        })
    })
    it("displays repo's review count", async () => {
        await waitFor(() => {
            expect(screen.getByText('5')).toBeDefined()
        })
    })
})
