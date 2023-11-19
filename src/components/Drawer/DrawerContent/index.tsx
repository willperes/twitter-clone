import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import { DrawerBox } from './styles';
import { UserPhoto } from '../../User/UserPhoto';
import { UserNickname } from '../../User/UserNickname';
import { Box } from '../../Layout/Box';
import { UserName } from '../../User/UserName';
import { getUser } from '../../../store/user/userSlice';
import { useAppSelector } from '../../../hooks/redux/useAppSelector';
import { InlineUserFollowText } from '../../User/UserFollowText';
import { DrawerItemList } from '../DrawerItemList';
import { Separator } from '../../Layout/Separator';
import { DrawerOptionList } from '../DrawerOptionList';

interface Props extends DrawerContentComponentProps {}

export const DrawerContent: React.FC<Props> = () => {
  const user = useAppSelector(getUser);

  return (
    <DrawerContentScrollView>
      <DrawerBox>
        <Box mb={9}>
          <UserPhoto photoURL={user.currentUser.photoURL} size={55} />
        </Box>
        <UserNickname
          name={user.currentUser.name}
          verified={user.currentUser.verified}
          textSize={'titleSmall'}
        />
        <UserName username={user.currentUser.username} />
        <Box mt={16} mb={4}>
          <InlineUserFollowText followingCount={user.following} followerCount={user.followers} />
        </Box>
      </DrawerBox>
      <DrawerItemList />

      <Separator mt={13} mb={13} />

      <DrawerOptionList />
    </DrawerContentScrollView>
  );
};
