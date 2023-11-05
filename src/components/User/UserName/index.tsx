import React from 'react';
import { View } from 'react-native';
import { Text } from '../../Layout';
import { useLayout } from '../../../hooks/useLayout';

interface Props {
  username: string;
  textSize?: number;
}

export const UserName: React.FC<Props> = ({ username, textSize = 16 }) => {
  const { theme } = useLayout();

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text fontSize={textSize} color={theme.colors.darkenText}>
        @
      </Text>
      <Text fontSize={textSize} color={theme.colors.darkenText}>
        {username}{' '}
      </Text>
    </View>
  );
};
