import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerNavigator } from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Home'} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
