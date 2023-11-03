import React from 'react';
import { type TouchableOpacityProps } from 'react-native';
import { Text } from '../Layout';
import styled from 'styled-components/native';
import { moderateScale } from '../../utils/layout';

interface Props extends TouchableOpacityProps {
  title: string;
}

export const Button: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <StyledTouchableOpacity {...rest} testID={'button'}>
      <StyledText>{title}</StyledText>
    </StyledTouchableOpacity>
  );
};

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};

  padding-left: ${moderateScale(14)}px;
  padding-right: ${moderateScale(14)}px;
  padding-top: ${moderateScale(8)}px;
  padding-bottom: ${moderateScale(8)}px;

  border-radius: 1000px;
`;

const StyledText = styled(Text).attrs(({ theme }) => ({
  fontFamily: theme.fonts.inter.semiBold,
  size: 14,
}))`
  color: white;
`;
