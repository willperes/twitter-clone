import React from 'react';
import { type TextInputProps } from 'react-native';
import * as S from './styles';
import { type Control, Controller, type RegisterOptions } from 'react-hook-form';

interface Props extends TextInputProps {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;

  error?: string;
}

export const FormInput: React.FC<Props> = ({ name, control, rules, error, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <>
          <S.RawFormInput
            testID={'form-input'}
            value={value}
            onChangeText={onChange}
            hasError={!!error}
            {...rest}
          />
          {error ? <S.ErrorText>{error}</S.ErrorText> : null}
        </>
      )}
    />
  );
};
