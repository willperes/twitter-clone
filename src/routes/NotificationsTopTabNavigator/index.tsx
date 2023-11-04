import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FeedTab } from '../../screens/FeedTab';
import { moderateScale } from '../../utils/layout';
import { SEPARATOR_WIDTH } from '../../theme/constants';
import { useLayout } from '../../hooks/useLayout';

const Tab = createMaterialTopTabNavigator();

export const NotificationsTopTabNavigator: React.FC = () => {
  const { theme } = useLayout();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          minHeight: moderateScale(44),
        },
        tabBarStyle: {
          borderBottomWidth: SEPARATOR_WIDTH,
          borderBottomColor: theme.colors.primarySeparator,
        },
        tabBarLabelStyle: {
          textTransform: 'none',
          fontFamily: theme.fonts.inter.semiBold,
          fontSize: moderateScale(16),
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.darkenText,
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}
      initialRouteName={'AllNotificationsTab'}
    >
      <Tab.Screen
        name={'AllNotificationsTab'}
        component={FeedTab}
        options={{ tabBarLabel: 'All' }}
      />
      <Tab.Screen name={'MentionsTab'} component={FeedTab} options={{ tabBarLabel: 'Mentions' }} />
    </Tab.Navigator>
  );
};
