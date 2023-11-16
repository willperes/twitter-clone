import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../../Layout';
import { useLayout } from '../../../hooks/useLayout';
import { Box } from '../../Layout/Box';

interface Props {
  callback: () => void;
  text: string;
  icon?: React.ReactElement;
}

export const DrawerItem: React.FC<Props> = ({ callback, text, icon }) => {
  const { theme } = useLayout();

  return (
    <TouchableOpacity testID={'drawer-item-button'} onPress={callback}>
      <Box p={[18, 25, 18, 25]} fd={'row'} align={'center'}>
        {icon ?? null}
        <Box ml={icon ? 22 : undefined}>
          <Text fontFamily={theme.fonts.inter.regular} fontSize={'titleSmall'} color={theme.colors.text}>
            {text}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};
