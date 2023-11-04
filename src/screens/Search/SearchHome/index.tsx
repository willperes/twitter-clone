import React from 'react';
import { TrendsTitle } from '../../../components/screens/SearchScreen/TrendsTitle';
import { EmptyTrends } from '../../../components/screens/SearchScreen/EmptyTrends';

export const SearchHome: React.FC = () => {
  return (
    <>
      <TrendsTitle />
      <EmptyTrends />
    </>
  );
};
