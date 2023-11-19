import { type PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { type User } from '../../types/data/User';
import { type RootState } from '..';
import { type FirebaseAuthTypes } from '@react-native-firebase/auth';
import { userService } from '../../services/userService';

export interface UserState {
  currentUser: User;
  followers: number;
  following: number;
}

const initialState: UserState = {
  // TODO: find a way to improve this.
  currentUser: {} as User,
  followers: 924,
  following: 127,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      return {
        ...state,
        currentUser: action.payload ?? ({} as User),
      };
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const getUser = (state: RootState) => state.user;
export const getIsAuthenticated = (state: RootState) =>
  !!Object.values(state.user.currentUser).length;
export const getCurrentUser = (state: RootState) => state.user.currentUser;

export const changeUserThunk = createAsyncThunk(
  'user/changeUser',
  async (user: FirebaseAuthTypes.User | null, { rejectWithValue, dispatch }) => {
    if (!user) {
      dispatch(userSlice.actions.setCurrentUser(null));
      return;
    }

    try {
      const user = await userService.getCurrentUser();
      dispatch(userSlice.actions.setCurrentUser(user));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export default userSlice.reducer;
