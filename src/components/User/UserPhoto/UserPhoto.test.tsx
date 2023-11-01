import { UserPhoto } from '.';
import { render } from '../../../../__utils__/render';

const photoURL = 'https://github.com/willperes.png';

describe('components/User/UserPhoto', () => {
  it('should display the user picture on the card', async () => {
    const { getByTestId } = render(<UserPhoto photoURL={photoURL} size={35} />);

    const image = getByTestId('user-photo');

    expect(image.props.source.uri).toEqual(photoURL);
  });
});
