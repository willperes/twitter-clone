import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SearchScreen } from '../../../../../screens/SearchScreen';
import { FeedScreen } from '../../../../../screens/FeedScreen';
import { SearchHeader } from '../../../../../components/Header/SearchHeader';

const Stack = createNativeStackNavigator();

export const SearchStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={SearchScreen}
        options={{
          header: () => <SearchHeader />,
        }}
      />
      <Stack.Screen name={'Active'} component={FeedScreen} options={{ animation: 'simple_push' }} />
    </Stack.Navigator>
  );
};
