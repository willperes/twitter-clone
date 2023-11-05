import React from 'react';
import { type TouchableOpacityProps } from 'react-native-gesture-handler';
import { StyledBaseButton } from './styles';

export interface ButtonStyleProps {
  buttonStyle?: 'default' | 'outlined' | 'outlined-text';
  buttonSize?: 'default' | 'large';
}

export interface ButtonProps extends TouchableOpacityProps, ButtonStyleProps {}

export const BaseButton: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  ...rest
}) => {
  return (
    <StyledBaseButton testID={'base-button'} {...rest}>
      {children}
    </StyledBaseButton>
  );
};
