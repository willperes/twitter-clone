import React from 'react';
import { BaseHeader } from '../BaseHeader';
import { UserPhoto } from '../../UserPhoto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useLayout } from '../../../hooks/useLayout';
import { moderateScale } from '../../../utils/layout';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const FeedHeader: React.FC = () => {
  const { theme } = useLayout();
  const navigation = useNavigation();

  function leadingCallback(): void {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <BaseHeader
      leadingCallback={leadingCallback}
      leadingComponent={<UserPhoto photoURL={'https://github.com/willperes.png'} size={32} />}
      trailingCallback={() => {}}
      trailingComponent={
        <MaterialCommunityIcons
          name={'shimmer'}
          color={theme.colors.primary}
          size={moderateScale(22)}
        />
      }
      titleComponent={
        <MaterialCommunityIcons
          name={'bird'}
          color={theme.colors.primary}
          size={moderateScale(32)}
        />
      }
    />
  );
};
