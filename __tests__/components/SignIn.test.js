import {
    render,
    screen,
    fireEvent,
    waitFor,
} from '@testing-library/react-native'
import { SignInForm } from '../../src/components/SignIn'
// ...

const mockOnSubmit = jest.fn()

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            render(<SignInForm onSubmit={mockOnSubmit} />)
            fireEvent.changeText(
                screen.getByPlaceholderText('Username'),
                'kalle'
            )
            fireEvent.changeText(
                screen.getByPlaceholderText('Password'),
                'password'
            )
            fireEvent.press(screen.getByText('Sign in'))

            await waitFor(() => {
                expect(mockOnSubmit.mock.calls[0][0]).toEqual({
                    username: 'kalle',
                    password: 'password',
                })

            })
        })
    })
})
