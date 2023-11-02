import React from 'react';
import { type TextProps } from 'react-native';
import { moderateScale } from '../../../utils/layout';
import styled, { css } from 'styled-components/native';

interface Props extends TextProps {
  color?: string;
  size?: number;
  fontFamily?: string;
}

export const Text: React.FC<React.PropsWithChildren<Props>> = ({ children, ...rest }) => {
  return <RawText {...rest}>{children}</RawText>;
};

const RawText = styled.Text<Props>`
  color: ${({ color, theme }) => color ?? theme.colors.text};

  ${({ size }) =>
    size &&
    css`
      font-size: ${moderateScale(size)}px;
    `}

  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `}
`;
