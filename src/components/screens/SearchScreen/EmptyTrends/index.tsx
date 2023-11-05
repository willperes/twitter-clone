import React from 'react';
import * as S from './styles';
import { Box } from '../../../Layout/Box';
import { Button } from '../../../Buttons/Button';

export const EmptyTrends: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Heading>No new trends for you</S.Heading>
      <Box mt={13} mb={15}>
        <S.Paragraph>
          It seems like there&apos;s not a lot to show you right now, but you can see trends for
          other areas
        </S.Paragraph>
      </Box>
      <Button title={'Change location'} />
    </S.Wrapper>
  );
};
