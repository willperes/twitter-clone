import React from 'react';
import { type ButtonStyleProps } from '../BaseButton';
import { type TextProps } from '../../Layout/Text';
import { StyledBaseButtonText } from './styles';

interface Props extends TextProps, ButtonStyleProps {}

export const BaseButtonText: React.FC<React.PropsWithChildren<Props>> = ({ children, ...rest }) => {
  return <StyledBaseButtonText {...rest}>{children}</StyledBaseButtonText>;
};
