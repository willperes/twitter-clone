import React from 'react';
import { DrawerItem } from '../DrawerItem';
import auth from '@react-native-firebase/auth';

export const DrawerOptionList: React.FC = () => {
  /** TODO: temporary, remove this later when sign out
   * functionality has been created.
   */
  async function handleSignOut(): Promise<void> {
    await auth().signOut();
  }

  return (
    <>
      <DrawerItem callback={() => {}} text={'Settings and privacy'} />
      <DrawerItem callback={handleSignOut} text={'Help Center'} />
    </>
  );
};
