import { useState } from 'react';
import auth, { type FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useAppSelector } from '../redux/useAppSelector';
import { useAppDispatch } from '../redux/useAppDispatch';
import { changeUserThunk, getIsAuthenticated, getUser } from '../../store/user/userSlice';

export const useAuthentication = () => {
  const [initializing, setInitializing] = useState(true);

  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(getIsAuthenticated);
  const user = useAppSelector(getUser);

  async function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    await dispatch(changeUserThunk(user));
    if (initializing) setInitializing(false);
  }

  async function handleSignIn(token: string): Promise<void> {
    try {
      await auth().signInWithCustomToken(token);
    } catch (error) {
      // TODO: handle error
      console.log(error);
    }
  }

  return {
    initializing,
    isAuthenticated,
    user,
    handleSignIn,
    onAuthStateChanged,
  };
};
