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
          nickname={user.currentUser.nickname}
          verified={user.currentUser.verified}
          textSize={19}
        />
        <UserName username={user.currentUser.username} />
        <Box mt={16}>
          <InlineUserFollowText followingCount={user.following} followerCount={user.followers} />
        </Box>
      </DrawerBox>
    </DrawerContentScrollView>
  );
};
