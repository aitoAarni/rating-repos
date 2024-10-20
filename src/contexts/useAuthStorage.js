import { useContext } from 'react'
import AuthStorageContext from './AuthStorageContex'

const useAuthStorage = () => {
    return useContext(AuthStorageContext)
}

export default useAuthStorage