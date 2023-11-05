import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootDrawer } from './RootDrawer';
import { SignInScreen } from '../../screens/SignInScreen';

const Stack = createNativeStackNavigator();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'SignInScreen'}>
      <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
      <Stack.Screen name={'RootDrawer'} component={RootDrawer} />
    </Stack.Navigator>
  );
};
