import { useState } from 'react';
import auth, { type FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useAppSelector } from '../redux/useAppSelector';
import { useAppDispatch } from '../redux/useAppDispatch';
import { changeUserThunk, getIsAuthenticated, getUser } from '../../store/user/userSlice';
import { type SignUpDto } from '../../types/data/authentication/SignUpDto';
import { userService } from '../../services/userService';
import { type SignInDto } from '../../types/data/authentication/SignInDto';

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
    }
  }

  async function handleSubmitSignUp(data: SignUpDto): Promise<void> {
    try {
      const { accessToken } = await userService.signUp(data);
      await handleSignIn(accessToken);
    } catch (error) {
      // TODO: handle error
    }
  }

  async function handleSubmitSignIn(data: SignInDto): Promise<void> {
    try {
      const { accessToken } = await userService.signIn(data);
      await handleSignIn(accessToken);
    } catch (error) {
      // TODO: handle error
    }
  }

  return {
    initializing,
    isAuthenticated,
    user,
    handleSignIn,
    handleSubmitSignUp,
    handleSubmitSignIn,
    onAuthStateChanged,
  };
};
