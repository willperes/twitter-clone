import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { useLayout } from '../../hooks/useLayout';
import { FeedScreen } from '../../screens/FeedScreen';

const Tab = createBottomTabNavigator();

export function TabNavigator(): React.ReactNode {
  const { theme, moderateScale } = useLayout();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.darkenText,
      }}
    >
      <Tab.Screen
        name={'Feed'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'home'} size={moderateScale(22)} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'search'} size={moderateScale(22)} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Notifications'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'bell'} size={moderateScale(22)} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'DirectMessages'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'mail'} size={moderateScale(22)} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
