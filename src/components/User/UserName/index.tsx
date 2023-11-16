import React from 'react';
import { View } from 'react-native';
import { Text } from '../../Layout';
import { useLayout } from '../../../hooks/useLayout';
import { type DefaultTheme } from 'styled-components/native';

interface Props {
  username: string;
  textSize?: keyof DefaultTheme['fontSizes'];
}

export const UserName: React.FC<Props> = ({ username, textSize = 'bodyLarge' }) => {
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
