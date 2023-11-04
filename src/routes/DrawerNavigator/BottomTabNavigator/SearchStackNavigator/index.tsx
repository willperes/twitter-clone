import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SearchHome } from '../../../../screens/Search/SearchHome';
import { SearchHeader } from '../../../../components/Header/SearchHeader';

const Stack = createNativeStackNavigator();

export const SearchStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'SearchHome'}>
      <Stack.Screen
        name={'SearchHome'}
        component={SearchHome}
        options={{
          header: () => <SearchHeader />,
        }}
      />
    </Stack.Navigator>
  );
};
