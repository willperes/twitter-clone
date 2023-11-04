import React from 'react';
import { TrendsTitle } from '../../components/screens/SearchScreen/TrendsTitle';
import { EmptyTrends } from '../../components/screens/SearchScreen/EmptyTrends';

export const SearchTab: React.FC = () => {
  return (
    <>
      <TrendsTitle />
      <EmptyTrends />
    </>
  );
};
