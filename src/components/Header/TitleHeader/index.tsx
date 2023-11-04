import React from 'react';
import { BaseHeader, type BaseHeaderProps } from '../BaseHeader';
import { UserPhoto } from '../../User/UserPhoto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useLayout } from '../../../hooks/useLayout';
import { moderateScale } from '../../../utils/layout';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../../hooks/redux/useAppSelector';
import { getCurrentUser } from '../../../store/user/userSlice';
import { Text } from '../../Layout';

interface Props extends BaseHeaderProps {
  title: string;
}

export const TitleHeader: React.FC<Props> = ({ title, ...rest }) => {
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
        <Text size={17} fontFamily={theme.fonts.inter.extraBold}>
          {title}
        </Text>
      }
      {...rest}
    />
  );
};
