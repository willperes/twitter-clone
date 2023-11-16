import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { FeedScreen } from '../../../../../screens/FeedScreen';
import { moderateScale } from '../../../../../utils/layout';
import { SEPARATOR_WIDTH } from '../../../../../theme/constants';
import { useLayout } from '../../../../../hooks/useLayout';

const TopTab = createMaterialTopTabNavigator();

export const NotificationsTopTab: React.FC = () => {
  const { theme } = useLayout();

  return (
    <TopTab.Navigator
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
          fontSize: moderateScale(theme.fontSizes.bodyLarge),
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.darkenText,
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
        },
      }}
    >
      <TopTab.Screen name={'All'} component={FeedScreen} />
      <TopTab.Screen name={'Mentions'} component={FeedScreen} />
    </TopTab.Navigator>
  );
};
