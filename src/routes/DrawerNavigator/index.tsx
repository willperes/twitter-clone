import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { TabNavigator } from '../TabNavigator';

const Drawer = createDrawerNavigator();

export function DrawerNavigator(): React.ReactNode {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name={'HomeDrawer'} component={TabNavigator} />
    </Drawer.Navigator>
  );
}
