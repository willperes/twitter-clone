import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { DrawerContent } from '../../components/Drawer/DrawerContent';
import { DRAWER_WIDTH } from '../../theme/constants';
import { BottomTabNavigator } from './BottomTabNavigator';

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
      initialRouteName={'DrawerHome'}
    >
      <Drawer.Screen name={'DrawerHome'} component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}
