import React from 'react';
import { type TextProps } from 'react-native';
import { moderateScale } from '../../../utils/layout';
import styled, { css } from 'styled-components/native';

interface Props extends TextProps {
  isLink?: boolean;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
}

export const Text: React.FC<React.PropsWithChildren<Props>> = ({
  isLink = false,
  children,
  ...rest
}) => {
  return (
    <RawText color={isLink ? '#4C9EEB' : rest.color} {...rest}>
      {children}
    </RawText>
  );
};

const RawText = styled.Text<Props>`
  color: ${({ color, theme }) => color ?? theme.colors.text};

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${moderateScale(fontSize)}px;
    `}

  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `}
`;

export type { Props as TextProps };
