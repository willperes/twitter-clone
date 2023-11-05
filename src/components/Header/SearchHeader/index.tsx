import React from 'react';
import { BaseHeader } from '../BaseHeader';
import { UserPhoto } from '../../User/UserPhoto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useLayout } from '../../../hooks/useLayout';
import { moderateScale } from '../../../utils/layout';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../../hooks/redux/useAppSelector';
import { getCurrentUser } from '../../../store/user/userSlice';
import { SearchBar } from '../../SearchBar';
import { Pressable } from 'react-native';

export const SearchHeader: React.FC = () => {
  const { theme } = useLayout();
  const navigation = useNavigation();
  const currentUser = useAppSelector(getCurrentUser);

  function leadingCallback(): void {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  function navigateToActiveSearch(): void {
    navigation.navigate('RootDrawer', {
      screen: 'RootBottomTab',
      params: {
        screen: 'SearchScreen',
        params: {
          screen: 'Active',
        },
      },
    });
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
        <Pressable style={{ width: '100%' }} onPress={navigateToActiveSearch}>
          <SearchBar displayOnly />
        </Pressable>
      }
    />
  );
};
