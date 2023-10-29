import { render, waitFor } from '@testing-library/react-native';
import { themeProviderWrapper } from '../../__utils__/wrappers/themeProviderWrapper';
import { type TweetUserInformation } from '../../src/types/data/Tweet';
import { UserNickname } from '../../src/components/UserNickname';

const userInformation: TweetUserInformation = {
  username: 'willperes',
  nickname: 'Will',
  photoURL: 'https://github.com/willperes.png',
  verified: false,
};

const verifiedUserInformation: TweetUserInformation = {
  ...userInformation,
  verified: true,
};

jest.mock('react-native-vector-icons/MaterialIcons', () => 'MockedMaterialIcons');

describe('components/UserNickName', () => {
  it('should display the user nickname', async () => {
    const { getByText } = render(
      themeProviderWrapper()({ children: <UserNickname userInformation={userInformation} /> })
    );

    await waitFor(() => {
      expect(getByText(userInformation.nickname)).toBeTruthy();
    });
  });

  it('should display the verified badge if the user is verified', () => {
    const { getByTestId } = render(
      themeProviderWrapper()({
        children: <UserNickname userInformation={verifiedUserInformation} />,
      })
    );

    expect(getByTestId('tweet-card-verified-badge')).toBeTruthy();
  });

  it('should not display the verified badge if the user is not verified', () => {
    const { getByTestId } = render(
      themeProviderWrapper()({ children: <UserNickname userInformation={userInformation} /> })
    );

    expect(() => getByTestId('tweet-card-verified-badge')).toThrow();
  });
});
