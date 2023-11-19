import React from 'react';
import { Box } from '../../../Layout/Box';
import styled from 'styled-components/native';
import { Text } from '../../../Layout';
import { Separator } from '../../../Layout/Separator';

export const TrendsTitle: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Title>Trends for you</Title>
      </Wrapper>
      <Separator />
    </>
  );
};

const Wrapper = styled(Box).attrs({
  p: [12, 20, 12, 20],
})`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const Title = styled(Text).attrs(({ theme }) => ({
  fontFamily: theme.fonts.inter.extraBold,
  fontSize: 'titleSmall',
}))``;
