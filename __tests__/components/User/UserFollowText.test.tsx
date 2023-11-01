import { render } from '../../../__utils__/render';
import { UserFollowersText, UserFollowingText } from '../../../src/components/User/UserFollowText';

describe('components/User/UserFollowText', () => {
  describe('UserFollowing', () => {
    it('should display the correct amount of following accounts', () => {
      const { getByText } = render(<UserFollowingText count={100} />);

      expect(getByText('100')).toBeTruthy();
    });
  });

  describe('UserFollowing', () => {
    it('should display the correct amount of followers', () => {
      const { getByText } = render(<UserFollowersText count={50} />);

      expect(getByText('50')).toBeTruthy();
    });
  });
});
