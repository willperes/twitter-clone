import { render } from '../../../../__utils__/render';
import { TweetCard } from '.';
import { type TweetSummary } from '../../../types/data/Tweet';
import { waitFor } from '@testing-library/react-native';

const mockTweetSummary: TweetSummary = {
  id: 1,
  publishedBy: {
    username: 'willperes',
    name: 'Will',
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

describe('components/Tweet/TweetCard', () => {
  it('should display the tweet content on the card', async () => {
    const { getByText } = render(<TweetCard data={mockTweetSummary} />);

    await waitFor(() => {
      expect(getByText(mockTweetSummary.content)).toBeTruthy();
    });
  });
});
