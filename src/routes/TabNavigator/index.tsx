import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { useLayout } from '../../hooks/useLayout';
import { FeedScreen } from '../../screens/FeedScreen';
import { moderateScale } from '../../utils/layout';
import { FeedHeader } from '../../components/Header/FeedHeader';
import { SearchScreen } from '../../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export function TabNavigator(): React.ReactNode {
  const { theme } = useLayout();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.darkenText,
        header: () => <FeedHeader />,
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
        component={SearchScreen}
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
