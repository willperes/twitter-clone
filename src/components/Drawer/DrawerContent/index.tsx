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
import { getCurrentUser } from '../../../store/user/userSlice';
import { useAppSelector } from '../../../hooks/redux/useAppSelector';

interface Props extends DrawerContentComponentProps {}

export const DrawerContent: React.FC<Props> = () => {
  const currentUser = useAppSelector(getCurrentUser);

  return (
    <DrawerContentScrollView>
      <DrawerBox>
        <Box mb={9}>
          <UserPhoto photoURL={currentUser.photoURL} size={55} />
        </Box>
        <UserNickname
          nickname={currentUser.nickname}
          verified={currentUser.verified}
          textSize={19}
        />
        <UserName username={currentUser.username} />
      </DrawerBox>
    </DrawerContentScrollView>
  );
};
