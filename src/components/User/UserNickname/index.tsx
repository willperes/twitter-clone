import React from 'react';
import { View } from 'react-native';
import { Text } from '../../Layout';
import { useLayout } from '../../../hooks/useLayout';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from '../../../utils/layout';
import { type DefaultTheme } from 'styled-components/native';

interface Props {
  nickname: string;
  verified: boolean;
  textSize?: keyof DefaultTheme['fontSizes'];
}

export const UserNickname: React.FC<Props> = ({ nickname, verified, textSize = 'bodyLarge' }) => {
  const { theme } = useLayout();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text
        fontSize={textSize}
        fontFamily={theme.fonts.inter.semiBold}
        ellipsizeMode={'tail'}
        numberOfLines={1}
      >
        {nickname}
      </Text>
      {verified ? (
        <MaterialIcons
          testID={'verified-badge'}
          name={'verified'}
          color={theme.colors.primary}
          size={moderateScale(theme.fontSizes[textSize] * 0.875)}
          style={{ marginLeft: moderateScale(2) }}
        />
      ) : null}
    </View>
  );
};
