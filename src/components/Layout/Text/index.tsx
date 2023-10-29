import React from 'react';
import { Text as RawText, type TextProps } from 'react-native';
import { useLayout } from '../../../hooks/useLayout';

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
  const { moderateScale } = useLayout();

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
