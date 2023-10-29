import { themeProviderWrapper } from '../../__utils__/wrappers/themeProviderWrapper';
import { TweetCard } from '../../src/components/TweetCard';
import { type TweetSummary } from '../../src/types/data/Tweet';
import { render, waitFor } from '@testing-library/react-native';

const mockTweetSummary: TweetSummary = {
  publishedBy: {
    username: 'willperes',
    nickname: 'Will',
    photoURL: 'https://github.com/willperes.png',
    verified: false,
  },
  content:
    "Somebody once told me the world is gonna roll me\n\nI ain't the sharpest tool in the shed",
  createdAt: new Date('2023-10-28T20:00:00.968Z'),
  comments: 0,
  retweets: 5,
  likes: 20,
};

describe('components/TweetCard', () => {
  it('should display the username on the card', async () => {
    const { getByText } = render(
      themeProviderWrapper()({ children: <TweetCard data={mockTweetSummary} /> })
    );

    await waitFor(() => {
      expect(getByText(mockTweetSummary.publishedBy.username)).toBeTruthy();
    });
  });

  it('should display the tweet content on the card', async () => {
    const { getByText } = render(
      themeProviderWrapper()({ children: <TweetCard data={mockTweetSummary} /> })
    );

    await waitFor(() => {
      expect(getByText(mockTweetSummary.content)).toBeTruthy();
    });
  });

  it('should display the user picture on the card', async () => {
    const { getByTestId } = render(
      themeProviderWrapper()({ children: <TweetCard data={mockTweetSummary} /> })
    );

    expect(getByTestId('tweet-card-user-photo')).toBeTruthy();
  });
});
