import React from 'react';
import { type TweetUserInformation } from '../../types/data/Tweet';
import { View } from 'react-native';
import { Text } from '../Layout';
import { useLayout } from '../../hooks/useLayout';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from '../../utils/layout';

interface Props {
  userInformation: TweetUserInformation;
}

export const UserNickname: React.FC<Props> = ({ userInformation }) => {
  const { theme } = useLayout();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text
        size={16}
        fontFamily={theme.fonts.inter.semiBold}
        ellipsizeMode={'tail'}
        numberOfLines={1}
      >
        {userInformation.nickname}
      </Text>
      {userInformation.verified ? (
        <MaterialIcons
          testID={'tweet-card-verified-badge'}
          name={'verified'}
          color={theme.colors.primary}
          size={moderateScale(14)}
          style={{ marginLeft: moderateScale(2) }}
        />
      ) : null}
    </View>
  );
};
