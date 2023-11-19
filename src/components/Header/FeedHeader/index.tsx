import React from 'react';
import { BaseHeader } from '../BaseHeader';
import { UserPhoto } from '../../User/UserPhoto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useLayout } from '../../../hooks/useLayout';
import { moderateScale } from '../../../utils/layout';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../../hooks/redux/useAppSelector';
import { getCurrentUser } from '../../../store/user/userSlice';

export const FeedHeader: React.FC = () => {
  const { theme } = useLayout();
  const navigation = useNavigation();
  const currentUser = useAppSelector(getCurrentUser);

  function leadingCallback(): void {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <BaseHeader
      leadingCallback={leadingCallback}
      leadingComponent={<UserPhoto photoURL={currentUser.photoURL} size={32} />}
      trailingCallback={() => {}}
      trailingComponent={
        <MaterialCommunityIcons
          name={'shimmer'}
          color={theme.colors.primary}
          size={moderateScale(22)}
        />
      }
      titleComponent={
        <FontAwesome name={'twitter'} color={theme.colors.primary} size={moderateScale(32)} />
      }
    />
  );
};
