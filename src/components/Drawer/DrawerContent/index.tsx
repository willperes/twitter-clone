import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import { DrawerBox } from './styles';
import { UserPhoto } from '../../UserPhoto';
import { UserNickname } from '../../UserNickname';
import { Box } from '../../Layout/Box';

interface Props extends DrawerContentComponentProps {}

export const DrawerContent: React.FC<Props> = () => {
  return (
    <DrawerContentScrollView>
      <DrawerBox>
        <Box mb={9}>
          <UserPhoto photoURL={'https://github.com/willperes.png'} size={55} />
        </Box>
        <UserNickname nickname={'Will'} verified={true} textSize={19} />
      </DrawerBox>
    </DrawerContentScrollView>
  );
};
