import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FeedScreen } from '../../../../screens/FeedScreen';
import { NotificationsTopTab } from './NotificationsTopTab';
import { SearchStack } from './SearchStack';
import { useLayout } from '../../../../hooks/useLayout';
import Feather from 'react-native-vector-icons/Feather';
import { moderateScale } from '../../../../utils/layout';
import { FeedHeader } from '../../../../components/Header/FeedHeader';
import { TitleHeader } from '../../../../components/Header/TitleHeader';

const BottomTab = createBottomTabNavigator();

export const RootBottomTab: React.FC = () => {
  const { theme } = useLayout();

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.darkenText,
      }}
    >
      <BottomTab.Screen
        name={'FeedScreen'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'home'} size={moderateScale(22)} color={color} />
          ),
          header: () => <FeedHeader />,
        }}
      />
      <BottomTab.Screen
        name={'SearchScreen'}
        component={SearchStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'search'} size={moderateScale(22)} color={color} />
          ),
          lazy: true,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={'NotificationsScreen'}
        component={NotificationsTopTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'bell'} size={moderateScale(22)} color={color} />
          ),
          lazy: true,
          header: () => <TitleHeader title={'Notifications'} hideBottomBorder />,
        }}
      />
      <BottomTab.Screen
        name={'MessagesScreen'}
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name={'mail'} size={moderateScale(22)} color={color} />
          ),
          header: () => <TitleHeader title={'Messages'} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
