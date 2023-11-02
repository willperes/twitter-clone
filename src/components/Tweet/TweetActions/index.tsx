import React from 'react';
import { View } from 'react-native';
import { GenericActionButton } from './GenericActionButton';
import { useLayout } from '../../../hooks/useLayout';
import CommentStroke from '../../../assets/icons/comment-stroke.svg';
import RetweetStroke from '../../../assets/icons/retweet-stroke.svg';
import HeartStroke from '../../../assets/icons/heart-stroke.svg';
import ShareStroke from '../../..//assets/icons/share-stroke.svg';
import { moderateScale } from '../../../utils/layout';

interface Props {
  iconSize: number;
  countData?: {
    comments: number;
    retweets: number;
    likes: number;
  };
}

export const TweetActions: React.FC<Props> = ({ iconSize, countData }) => {
  const { theme } = useLayout();
  const size = moderateScale(iconSize);

  function onReplyPressed(): void {}
  function onRetweetPressed(): void {}
  function onLikePressed(): void {}
  function onSharePressed(): void {}

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flex: 1 }}>
        {/* Reply button */}
        <GenericActionButton
          icon={<CommentStroke fontSize={size} color={theme.colors.darkenText} />}
          callback={onReplyPressed}
          count={countData?.comments}
        />
      </View>

      <View style={{ flex: 1 }}>
        {/* Retweet button */}
        <GenericActionButton
          icon={<RetweetStroke fontSize={size} color={theme.colors.darkenText} />}
          callback={onRetweetPressed}
          count={countData?.retweets}
        />
      </View>

      <View style={{ flex: 1 }}>
        {/* Like button */}
        <GenericActionButton
          icon={<HeartStroke fontSize={size} color={theme.colors.darkenText} />}
          callback={onLikePressed}
          count={countData?.likes}
        />
      </View>

      <View style={{ flex: 1 }}>
        {/* Share button */}
        <GenericActionButton
          icon={<ShareStroke fontSize={size} color={theme.colors.darkenText} />}
          callback={onSharePressed}
        />
      </View>
    </View>
  );
};
