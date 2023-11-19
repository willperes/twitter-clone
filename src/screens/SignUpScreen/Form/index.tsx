import React, { useState } from 'react';
import { Box, FormInput } from '../../../components/Layout';
import { usernameValidationPattern } from '../../../utils/forms/usernameValidationPattern';
import { emailValidationPattern } from '../../../utils/forms/emailValidationPattern';
import { useForm } from 'react-hook-form';
import { type SignUpDto } from '../../../types/data/SignUpDto';
import { Button } from '../../../components/Buttons/Button';

interface Props {
  onSubmit: (data: SignUpDto) => Promise<void>;
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpDto>({
    mode: 'onChange',
  });

  async function onSubmitForm(data: SignUpDto): Promise<void> {
    setIsSubmitting(true);
    await onSubmit(data);
    setIsSubmitting(false);
  }

  return (
    <>
      <Box>
        <Box>
          <FormInput
            name={'name'}
            control={control}
            rules={{
              required: {
                value: true,
                message: 'This field is required',
              },
              minLength: { value: 8, message: 'Minimum length of 8 characters' },
            }}
            error={errors.name?.message}
            placeholder={'Name'}
          />
        </Box>

        <Box mt={22}>
          <FormInput
            name={'username'}
            control={control}
            rules={{
              required: {
                value: true,
                message: 'This field is required',
              },
              minLength: { value: 10, message: 'Minimum length of 10 characters' },
              pattern: usernameValidationPattern,
            }}
            error={errors.username?.message}
            placeholder={'Username'}
            autoCapitalize={'none'}
          />
        </Box>

        <Box mt={22}>
          <FormInput
            name={'email'}
            control={control}
            rules={{
              required: {
                value: true,
                message: 'This field is required',
              },
              pattern: emailValidationPattern,
            }}
            error={errors.email?.message}
            placeholder={'E-mail'}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
          />
        </Box>

        <Box mt={22}>
          <FormInput
            name={'password'}
            control={control}
            rules={{
              required: {
                value: true,
                message: 'This field is required',
              },
              minLength: { value: 5, message: 'Minimum length of 5 characters' },
            }}
            error={errors.password?.message}
            placeholder={'Password'}
            secureTextEntry
            autoCapitalize={'none'}
          />
        </Box>
      </Box>

      <Box>
        <Button
          testID={'sign-up-submit-button'}
          disabled={isSubmitting}
          title={'Submit'}
          buttonSize={'large'}
          onPress={handleSubmit(onSubmitForm)}
        />
      </Box>
    </>
  );
};
