import React from 'react';
import { TrendsTitle } from '../../components/screens/SearchScreen/TrendsTitle';
import { EmptyTrends } from '../../components/screens/SearchScreen/EmptyTrends';
import { Box } from '../../components/Layout';

export const SearchScreen: React.FC = () => {
  return (
    <Box>
      <TrendsTitle />
      <EmptyTrends />
    </Box>
  );
};
