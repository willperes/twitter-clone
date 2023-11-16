// import auth from '@react-native-firebase/auth';

export const useAuthentication = (): { handleLogin: () => void } => {
    function handleLogin(): void {
        // auth().createUserWithEmailAndPassword()
    }
    
    return {handleLogin}
}