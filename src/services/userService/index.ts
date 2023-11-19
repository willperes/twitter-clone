import { type SignUpResponse, type SignUpDto } from '../../types/data/SignUpDto';
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
  return await api.post<SignUpDto, SignUpResponse>('user', dto);
}

export const userService = {
  signUp,
  getCurrentUser,
};
