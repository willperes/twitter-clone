import { waitFor } from '@testing-library/react-native';
import { type TweetUserInformation } from '../../../types/data/Tweet';
import { UserNickname } from '.';
import { moderateScale } from '../../../utils/layout';
import { render } from '../../../../__utils__/render';

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

describe('components/User/UserNickName', () => {
  it('should display the user nickname', async () => {
    const { getByText } = render(
      <UserNickname nickname={userInformation.nickname} verified={userInformation.verified} />
    );

    await waitFor(() => {
      expect(getByText(userInformation.nickname)).toBeTruthy();
    });
  });

  it('should display the verified badge if the user is verified', () => {
    const { getByTestId } = render(
      <UserNickname
        nickname={verifiedUserInformation.nickname}
        verified={verifiedUserInformation.verified}
      />
    );

    expect(getByTestId('verified-badge')).toBeTruthy();
  });

  it('should not display the verified badge if the user is not verified', () => {
    const { getByTestId } = render(
      <UserNickname nickname={userInformation.nickname} verified={userInformation.verified} />
    );

    expect(() => getByTestId('verified-badge')).toThrow();
  });

  it('should change the text and icon size proportionally when provided with the textSize prop', () => {
    const { getByText, getByTestId } = render(
      <UserNickname
        nickname={verifiedUserInformation.nickname}
        verified={verifiedUserInformation.verified}
        textSize={20}
      />
    );

    const text = getByText(verifiedUserInformation.nickname);
    const icon = getByTestId('verified-badge');

    expect(text).toHaveStyle({ fontSize: moderateScale(20) });
    expect(icon).toHaveProp('size', moderateScale(20 * 0.875));
  });
});
