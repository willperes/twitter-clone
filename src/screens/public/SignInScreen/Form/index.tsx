import React, { useState } from 'react';
import { Box, FormInput } from '../../../../components/Layout';
import { usernameValidationPattern } from '../../../../utils/forms/usernameValidationPattern';
import { useForm } from 'react-hook-form';
import { Button } from '../../../../components/Buttons/Button';
import { type SignInDto } from '../../../../types/data/authentication/SignInDto';

interface Props {
  onSubmit: (data: SignInDto) => Promise<void>;
}

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInDto>({
    mode: 'onChange',
  });

  async function onSubmitForm(data: SignInDto): Promise<void> {
    setIsSubmitting(true);
    await onSubmit(data);
    setIsSubmitting(false);
  }

  return (
    <Box justify={'space-between'} style={{ flex: 1 }}>
      <Box>
        <Box>
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
          testID={'sign-in-submit-button'}
          disabled={isSubmitting}
          title={'Submit'}
          buttonSize={'large'}
          onPress={handleSubmit(onSubmitForm)}
        />
      </Box>
    </Box>
  );
};
