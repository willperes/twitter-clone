import React from 'react';
import { Box, FormInput } from '../../../components/Layout';
import { usernameValidationPattern } from '../../../utils/forms/usernameValidationPattern';
import { emailValidationPattern } from '../../../utils/forms/emailValidationPattern';
import { type Control, type FieldErrors } from 'react-hook-form';
import { type SignUpDto } from '../../../types/data/SignUpDto';

interface Props {
  control: Control<SignUpDto, any>;
  errors: FieldErrors<SignUpDto>;
}

export const Form: React.FC<Props> = ({ control, errors }) => {
  return (
    <>
      <Box>
        <FormInput
          name={'name'}
          control={control}
          rules={{
            required: {
              value: true,
              message: 'This field is required',
            },
            minLength: { value: 5, message: 'Minimum length of 5 characters' },
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
            minLength: { value: 5, message: 'Minimum length of 5 characters' },
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
    </>
  );
};
