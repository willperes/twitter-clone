import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStack } from './RootStack';

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
