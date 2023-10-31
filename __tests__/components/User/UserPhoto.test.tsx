import { render } from '@testing-library/react-native';
import { UserPhoto } from '../../../src/components/User/UserPhoto';
import { TestingWrapper } from '../../../__utils__/wrappers/TestingWrapper';

const photoURL = 'https://github.com/willperes.png';

describe('components/User/UserPhoto', () => {
  it('should display the user picture on the card', async () => {
    const { getByTestId } = render(
      <TestingWrapper>
        <UserPhoto photoURL={photoURL} size={35} />
      </TestingWrapper>
    );

    const image = getByTestId('user-photo');

    expect(image.props.source.uri).toEqual(photoURL);
  });
});
