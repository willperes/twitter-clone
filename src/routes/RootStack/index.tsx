import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootDrawer } from './RootDrawer';
import { SignInScreen } from '../../screens/SignInScreen';
import { SignUpScreen } from '../../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'SignInScreen'}>
      <Stack.Screen name={'SignInScreen'} component={SignInScreen} />
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <Stack.Screen name={'RootDrawer'} component={RootDrawer} />
    </Stack.Navigator>
  );
};
