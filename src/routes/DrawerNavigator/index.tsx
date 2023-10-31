import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { TabNavigator } from '../TabNavigator';
import { DrawerContent } from '../../components/Drawer/DrawerContent';
import { DRAWER_WIDTH } from '../../theme/constants';

const Drawer = createDrawerNavigator();

export function DrawerNavigator(): React.ReactNode {
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
      <Drawer.Screen name={'HomeDrawer'} component={TabNavigator} />
    </Drawer.Navigator>
  );
}
