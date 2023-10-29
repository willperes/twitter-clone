import React from 'react';
import { type TweetSummary } from '../../types/data/Tweet';
import { TouchableOpacity, View } from 'react-native';
import { useLayout } from '../../hooks/useLayout';
import { Text } from '../Layout';
import { UserNickname } from '../UserNickname';
import { UserPhoto } from '../UserPhoto';
import { moderateScale } from '../../utils/layout';

interface Props {
  data: TweetSummary;
}

export const TweetCard: React.FC<Props> = ({ data }) => {
  const { theme } = useLayout();

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
        <UserPhoto photoURL={data.publishedBy.photoURL} size={55} />
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
