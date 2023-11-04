import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerNavigator } from './DrawerNavigator';
import { useLayout } from '../hooks/useLayout';

const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => {
  const { theme } = useLayout();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: theme.colors.darkerBackgroundColor },
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Home'} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
