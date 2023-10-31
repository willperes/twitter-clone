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

interface Props extends DrawerContentComponentProps {}

export const DrawerContent: React.FC<Props> = () => {
  return (
    <DrawerContentScrollView>
      <DrawerBox>
        <Box mb={9}>
          <UserPhoto photoURL={'https://github.com/willperes.png'} size={55} />
        </Box>
        <UserNickname nickname={'Will'} verified={true} textSize={19} />
        <UserName username={'willperes'} />
      </DrawerBox>
    </DrawerContentScrollView>
  );
};
