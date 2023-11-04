import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { useLayout } from '../../../hooks/useLayout';
import { FeedTab } from '../../../screens/FeedTab';
import { moderateScale } from '../../../utils/layout';
import { FeedHeader } from '../../../components/Header/FeedHeader';
import { NotificationsTopTabNavigator } from './NotificationsTopTabNavigator';
import { TitleHeader } from '../../../components/Header/TitleHeader';
import { SearchStackNavigator } from './SearchStackNavigator';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator(): React.ReactNode {
  const { theme } = useLayout();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.darkenText,
        header: () => <FeedHeader />,
      }}
      initialRouteName={'FeedBottomTab'}
    >
      <Tab.Screen
        name={'FeedBottomTab'}
        component={FeedTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'home'} size={moderateScale(22)} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'SearchBottomTab'}
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'search'} size={moderateScale(22)} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'NotificationsBottomTab'}
        component={NotificationsTopTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'bell'} size={moderateScale(22)} color={color} />
          ),
          header: () => <TitleHeader title={'Notifications'} hideBottomBorder />,
        }}
      />
      <Tab.Screen
        name={'DirectMessagesBottomTab'}
        component={FeedTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'mail'} size={moderateScale(22)} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
