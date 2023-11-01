import { waitFor } from '@testing-library/react-native';
import { UserName } from '../../../src/components/User/UserName';
import { render } from '../../../__utils__/render';

const username = 'willperes';

describe('components/User/UserName', () => {
  it('should display the username on the card', async () => {
    const { getByText } = render(<UserName username={username} />);

    await waitFor(() => {
      expect(getByText(username)).toBeTruthy();
    });
  });
});
