import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { RootStack } from './RootStack';
import { useAuthentication } from '../hooks/useAuthentication';
import auth from '@react-native-firebase/auth';

export const Routes: React.FC = () => {
  const { initializing, onAuthStateChanged } = useAuthentication();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
