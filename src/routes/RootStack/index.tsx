import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootDrawer } from './RootDrawer';
import { NotAuthenticatedScreen } from '../../screens/public/NotAuthenticatedScreen';
import { SignUpScreen } from '../../screens/public/SignUpScreen';
import { useAuthentication } from '../../hooks/useAuthentication';

const Stack = createNativeStackNavigator();

export const RootStack: React.FC = () => {
  const { isAuthenticated } = useAuthentication();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'NotAuthenticatedScreen'}
    >
      {isAuthenticated ? (
        <Stack.Screen name={'RootDrawer'} component={RootDrawer} />
      ) : (
        <>
          <Stack.Screen name={'NotAuthenticatedScreen'} component={NotAuthenticatedScreen} />
          <Stack.Screen
            name={'SignUpScreen'}
            component={SignUpScreen}
            options={{
              headerShown: true,
              headerTitle: 'Create your account',
              headerBackTitleVisible: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
