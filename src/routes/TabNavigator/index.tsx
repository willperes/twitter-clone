import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { useLayout } from '../../hooks/useLayout';
import { FeedTab } from '../../screens/FeedTab';
import { moderateScale } from '../../utils/layout';
import { FeedHeader } from '../../components/Header/FeedHeader';
import { SearchTab } from '../../screens/SearchTab';
import { NotificationsTopTabNavigator } from '../NotificationsTopTabNavigator';
import { TitleHeader } from '../../components/Header/TitleHeader';
import { SearchHeader } from '../../components/Header/SearchHeader';

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
      initialRouteName={'FeedTab'}
    >
      <Tab.Screen
        name={'FeedTab'}
        component={FeedTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'home'} size={moderateScale(22)} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'SearchTab'}
        component={SearchTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'search'} size={moderateScale(22)} color={color} />
          ),
          header: () => <SearchHeader />,
        }}
      />
      <Tab.Screen
        name={'NotificationsTab'}
        component={NotificationsTopTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'bell'} size={moderateScale(22)} color={color} />
          ),
          header: () => <TitleHeader title={'Notifications'} hideBottomBorder />,
        }}
      />
      <Tab.Screen
        name={'DirectMessagesTab'}
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
