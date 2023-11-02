import React from 'react';
import { DrawerItem } from '../DrawerItem';

export const DrawerOptionList: React.FC = () => {
  return (
    <>
      <DrawerItem callback={() => {}} text={'Settings and privacy'} />
      <DrawerItem callback={() => {}} text={'Help Center'} />
    </>
  );
};
