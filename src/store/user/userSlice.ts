import { createSlice } from '@reduxjs/toolkit';
import { type User } from '../../types/data/User';
import { type RootState } from '..';

export interface UserState {
  currentUser: User;
  followers: number;
  following: number;
}

const initialState: UserState = {
  currentUser: {
    username: 'willperes',
    nickname: 'Will 🇧🇷',
    photoURL: 'https://github.com/willperes.png',
    verified: true,
  },
  followers: 924,
  following: 127,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions

export const getUser = (state: RootState): UserState => state.user;
export const getCurrentUser = (state: RootState): User => state.user.currentUser;

export default userSlice.reducer;
