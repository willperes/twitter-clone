import { waitFor } from '@testing-library/react-native';
import { type TweetUserInformation } from '../../../types/data/Tweet';
import { UserNickname } from '.';
import { moderateScale } from '../../../utils/layout';
import { render } from '../../../../__utils__/render';
import { FONT_SIZES } from '../../../theme/constants';

const userInformation: TweetUserInformation = {
  username: 'willperes',
  name: 'Will',
  photoURL: 'https://github.com/willperes.png',
  verified: false,
};

const verifiedUserInformation: TweetUserInformation = {
  ...userInformation,
  verified: true,
};

jest.mock('react-native-vector-icons/MaterialIcons', () => 'MockedMaterialIcons');

describe('components/User/UserNickName', () => {
  it('should display the user name', async () => {
    const { getByText } = render(
      <UserNickname name={userInformation.name} verified={userInformation.verified} />
    );

    await waitFor(() => {
      expect(getByText(userInformation.name)).toBeTruthy();
    });
  });

  it('should display the verified badge if the user is verified', () => {
    const { getByTestId } = render(
      <UserNickname
        name={verifiedUserInformation.name}
        verified={verifiedUserInformation.verified}
      />
    );

    expect(getByTestId('verified-badge')).toBeTruthy();
  });

  it('should not display the verified badge if the user is not verified', () => {
    const { getByTestId } = render(
      <UserNickname name={userInformation.name} verified={userInformation.verified} />
    );

    expect(() => getByTestId('verified-badge')).toThrow();
  });

  it('should change the text and icon size proportionally when provided with the textSize prop', () => {
    const { getByText, getByTestId } = render(
      <UserNickname
        name={verifiedUserInformation.name}
        verified={verifiedUserInformation.verified}
        textSize={'titleMedium'}
      />
    );

    const text = getByText(verifiedUserInformation.name);
    const icon = getByTestId('verified-badge');

    expect(text).toHaveStyle({ fontSize: moderateScale(FONT_SIZES.titleMedium) });
    expect(icon).toHaveProp('size', moderateScale(FONT_SIZES.titleMedium * 0.875));
  });
});
