import { render, waitFor } from '@testing-library/react-native';
import { type TweetUserInformation } from '../../src/types/data/Tweet';
import { UserNickname } from '../../src/components/UserNickname';
import { TestingWrapper } from '../../__utils__/wrappers/TestingWrapper';
import { moderateScale } from '../../src/utils/layout';

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
        <UserNickname nickname={userInformation.nickname} verified={userInformation.verified} />
      </TestingWrapper>
    );

    await waitFor(() => {
      expect(getByText(userInformation.nickname)).toBeTruthy();
    });
  });

  it('should display the verified badge if the user is verified', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <UserNickname
          nickname={verifiedUserInformation.nickname}
          verified={verifiedUserInformation.verified}
        />
      </TestingWrapper>
    );

    expect(getByTestId('verified-badge')).toBeTruthy();
  });

  it('should not display the verified badge if the user is not verified', () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <UserNickname nickname={userInformation.nickname} verified={userInformation.verified} />
      </TestingWrapper>
    );

    expect(() => getByTestId('verified-badge')).toThrow();
  });

  it('should change the text and icon size proportionally when provided with the textSize prop', () => {
    const { getByText, getByTestId } = render(
      <TestingWrapper>
        <UserNickname
          nickname={verifiedUserInformation.nickname}
          verified={verifiedUserInformation.verified}
          textSize={20}
        />
      </TestingWrapper>
    );

    const text = getByText(verifiedUserInformation.nickname);
    const icon = getByTestId('verified-badge');

    expect(text).toHaveStyle({ fontSize: moderateScale(20) });
    expect(icon).toHaveProp('size', moderateScale(20 * 0.875));
  });
});
