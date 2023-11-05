import React from 'react';
import { type TweetSummary } from '../../../types/data/Tweet';
import { TouchableOpacity, View } from 'react-native';
import { useLayout } from '../../../hooks/useLayout';
import { Text } from '../../Layout';
import { UserNickname } from '../../User/UserNickname';
import { UserPhoto } from '../../User/UserPhoto';
import { moderateScale } from '../../../utils/layout';
import { TweetActions } from '../TweetActions';
import { UserName } from '../../User/UserName';

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
            <UserNickname
              nickname={data.publishedBy.nickname}
              verified={data.publishedBy.verified}
            />
            <Text> </Text>
            <UserName username={data.publishedBy.username} />
            <Text fontSize={16} color={theme.colors.darkenText}>
              · 10 s
            </Text>
          </View>
          <Text fontSize={16}>{data.content}</Text>
          <View style={{ marginTop: moderateScale(10) }}>
            <TweetActions
              iconSize={20}
              countData={{ comments: data.comments, retweets: data.retweets, likes: data.likes }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
