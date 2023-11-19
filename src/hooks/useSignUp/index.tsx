import { useForm } from 'react-hook-form';
import { type SignUpDto } from '../../types/data/SignUpDto';
import { useState } from 'react';
import { userService } from '../../services/userService';
import { useAuthentication } from '../useAuthentication';

export const useSignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleSignIn } = useAuthentication();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpDto>({
    mode: 'onChange',
  });

  async function onSubmit(data: SignUpDto): Promise<void> {
    try {
      setIsSubmitting(true);

      const { accessToken } = await userService.signUp(data);
      await handleSignIn(accessToken);
    } catch (error) {
      // TODO: handle error
    } finally {
      setIsSubmitting(false);
    }
  }

  return { control, errors, isSubmitting, handleSubmit: handleSubmit(onSubmit) };
};
