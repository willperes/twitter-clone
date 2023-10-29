import React from 'react';
import { Text as RawText, type TextProps } from 'react-native';
import { moderateScale } from '../../../utils/layout';

interface Props extends TextProps {
  color?: string;
  size?: number;
  fontFamily?: string;
}

export const Text: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  color,
  size,
  fontFamily,
}) => {
  return (
    <RawText
      style={{
        color,
        fontSize: size ? moderateScale(size) : undefined,
        fontFamily,
      }}
    >
      {children}
    </RawText>
  );
};
