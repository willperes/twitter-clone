import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootDrawer } from './RootDrawer';
import { NotAuthenticatedScreen } from '../../screens/public/NotAuthenticatedScreen';
import { SignUpScreen } from '../../screens/public/SignUpScreen';
import { useAuthentication } from '../../hooks/useAuthentication';
import { SignInScreen } from '../../screens/public/SignInScreen';

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
          <Stack.Group
            screenOptions={{
              headerShown: true,
              headerBackTitleVisible: false,
            }}
          >
            <Stack.Screen
              name={'SignUpScreen'}
              component={SignUpScreen}
              options={{
                headerTitle: 'Create your account',
              }}
            />
            <Stack.Screen
              name={'SignInScreen'}
              component={SignInScreen}
              options={{
                headerTitle: 'Sign In',
              }}
            />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
};
