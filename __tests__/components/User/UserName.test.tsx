import { render, waitFor } from '@testing-library/react-native';
import { TestingWrapper } from '../../../__utils__/wrappers/TestingWrapper';
import { UserName } from '../../../src/components/User/UserName';

const username = 'willperes';

describe('components/User/UserName', () => {
  it('should display the username on the card', async () => {
    const { getByText } = render(
      <TestingWrapper>
        <UserName username={username} />
      </TestingWrapper>
    );

    await waitFor(() => {
      expect(getByText(username)).toBeTruthy();
    });
  });
});
