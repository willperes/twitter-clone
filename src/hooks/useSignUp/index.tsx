import { type SignUpDto } from '../../types/data/SignUpDto';
import { userService } from '../../services/userService';
import { useAuthentication } from '../useAuthentication';

export const useSignUp = () => {
  const { handleSignIn } = useAuthentication();

  async function handleSubmitSignUp(data: SignUpDto): Promise<void> {
    try {
      const { accessToken } = await userService.signUp(data);
      await handleSignIn(accessToken);
    } catch (error) {
      // TODO: handle error
    }
  }

  return { handleSubmitSignUp };
};
