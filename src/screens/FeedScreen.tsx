import React from 'react';
import { FlatList, View } from 'react-native';
import { TweetCard } from '../components/TweetCard';
import { type TweetSummary } from '../types/data/Tweet';
import { useLayout } from '../hooks/useLayout';

const mockTweetSummary: TweetSummary = {
  id: 1,
  publishedBy: {
    username: 'willperes',
    nickname: 'Will',
    photoURL: 'https://github.com/willperes.png',
    verified: true,
  },
  content:
    "Somebody once told me the world is gonna roll me\n\nI ain't the sharpest tool in the shed",
  createdAt: new Date('2023-10-28T20:00:00.968Z'),
  comments: 2,
  retweets: 5,
  likes: 20,
};

const tweets = [
  mockTweetSummary,
  mockTweetSummary,
  mockTweetSummary,
  mockTweetSummary,
  mockTweetSummary,
  mockTweetSummary,
  mockTweetSummary,
  mockTweetSummary,
  mockTweetSummary,
  mockTweetSummary,
  mockTweetSummary,
  mockTweetSummary,
];

export const FeedScreen: React.FC = () => {
  const { theme } = useLayout();

  return (
    <FlatList
      data={tweets}
      renderItem={({ item }) => <TweetCard data={item} />}
      keyExtractor={() => `tweet-${Math.random()}-summary`}
      ItemSeparatorComponent={() => (
        <View
          style={{ height: 0.25, width: '100%', backgroundColor: theme.colors.secondarySeparator }}
        />
      )}
      style={{ backgroundColor: theme.colors.backgroundColor }}
    />
  );
};
