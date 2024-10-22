import { StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Navigate, Route, Routes } from 'react-router-native'
import SignIn from './SignIn'
import RepositoryItem from './RepositoryItem'
import SingleRepositoryItem from './SingleRepositoryItem'

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
                <Route path="/:id" element={<SingleRepositoryItem />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </View>
    )
}

export default Main
