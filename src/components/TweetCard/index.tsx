import React from 'react';
import { type TweetSummary } from '../../types/data/Tweet';
import { Image, TouchableOpacity, View } from 'react-native';
import { useLayout } from '../../hooks/useLayout';
import { Text } from '../Layout';
import { UserNickname } from '../UserNickname';

interface Props {
  data: TweetSummary;
}

export const TweetCard: React.FC<Props> = ({ data }) => {
  const { moderateScale, theme } = useLayout();

  function handleTweetDetails(): void {}

  return (
    <TouchableOpacity
      testID={'tweet-card-details-button'}
      onPress={handleTweetDetails}
      style={{
        width: '100%',
        backgroundColor: theme.colors.backgroundColor,
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          testID={'tweet-card-user-photo'}
          source={{
            uri: data.publishedBy.photoURL,
          }}
          height={moderateScale(55)}
          width={moderateScale(55)}
          borderRadius={100}
        />
        <View style={{ flexShrink: 1, marginLeft: moderateScale(8) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <UserNickname userInformation={data.publishedBy} />
            <Text size={16} color={theme.colors.darkenText}>
              {' '}
              @
            </Text>
            <Text size={16} color={theme.colors.darkenText}>
              {data.publishedBy.username}{' '}
            </Text>
            <Text size={16} color={theme.colors.darkenText}>
              · 10 s
            </Text>
          </View>
          <Text size={16}>{data.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
