import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { RootBottomTab } from './RootBottomTab';
import { DrawerContent } from '../../../components/Drawer/DrawerContent';
import { DRAWER_WIDTH } from '../../../theme/constants';

const Drawer = createDrawerNavigator();

export const RootDrawer: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: DRAWER_WIDTH,
        },
      }}
    >
      <Drawer.Screen name={'RootBottomTab'} component={RootBottomTab} />
    </Drawer.Navigator>
  );
};
