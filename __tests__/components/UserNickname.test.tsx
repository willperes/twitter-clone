import { render, waitFor } from '@testing-library/react-native';
import { type TweetUserInformation } from '../../src/types/data/Tweet';
import { UserNickname } from '../../src/components/UserNickname';
import { TestingWrapper } from '../../__utils__/wrappers/TestingWrapper';

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
      <TestingWrapper>
        <UserNickname userInformation={userInformation} />
      </TestingWrapper>
    );

    await waitFor(() => {
      expect(getByText(userInformation.nickname)).toBeTruthy();
    });
  });

  it('should display the verified badge if the user is verified', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <UserNickname userInformation={verifiedUserInformation} />
      </TestingWrapper>
    );

    expect(getByTestId('tweet-card-verified-badge')).toBeTruthy();
  });

  it('should not display the verified badge if the user is not verified', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <UserNickname userInformation={userInformation} />
      </TestingWrapper>
    );

    expect(() => getByTestId('tweet-card-verified-badge')).toThrow();
  });
});
