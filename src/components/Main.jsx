import { StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Navigate, Route, Routes } from 'react-router-native'
import SignIn from './SignIn'
import SingleRepositoryItem from './SingleRepositoryItem'
import CreateReview from './CreateReview'
import SignUp from './SignUp'
import UserReviewsList from './UserReviewsList'

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
})

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route
                    path="/repository/:id"
                    element={<SingleRepositoryItem />}
                />
                <Route path="/createReview" element={<CreateReview />} />
                <Route path="/myReviews" element={<UserReviewsList />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </View>
    )
}

export default Main
