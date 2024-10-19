import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace
        this.key = this.namespace + ':token'
    }

    async getAccessToken() {
        const rawAccessToken = await AsyncStorage.getItem(this.key)
        return rawAccessToken
    }

    async setAccessToken(accessToken) {
        try {
            await AsyncStorage.setItem(this.key, accessToken)
        } catch (error) {
            console.log(error)
        }
    }

    async removeAccessToken() {
        try {
            await AsyncStorage.removeItem(this.key)
        } catch (error) {
            console.log(error)
        }
    }
}

export default AuthStorage
