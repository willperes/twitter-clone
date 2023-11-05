import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootDrawer } from './RootDrawer';

const Stack = createNativeStackNavigator();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'RootDrawer'} component={RootDrawer} />
    </Stack.Navigator>
  );
};
