import { type SignInDto, type SignInResponse } from '../../types/data/authentication/SignInDto';
import { type SignUpResponse, type SignUpDto } from '../../types/data/authentication/SignUpDto';
import { type User } from '../../types/data/User';
import { api } from '../api';

/** Returns the current user information
 *
 * @returns User user
 */
async function getCurrentUser(): Promise<User> {
  return await api.get('user');
}

/** Returns the accessToken to use to authenticate the user
 *
 * @param SignUpDto dto
 * @returns string accessToken
 */
async function signUp(dto: SignUpDto): Promise<SignUpResponse> {
  return await api.post<SignUpDto, SignUpResponse>('user/signUp', dto);
}

/** Returns the accessToken to use to authenticate the user
 *
 * @param SignUpDto dto
 * @returns string accessToken
 */
async function signIn(dto: SignInDto): Promise<SignInResponse> {
  return await api.post<SignUpDto, SignUpResponse>('user/signIn', dto);
}

export const userService = {
  signUp,
  signIn,
  getCurrentUser,
};
