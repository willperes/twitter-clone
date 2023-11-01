import React from 'react';
import { useLayout } from '../../../hooks/useLayout';
import { Text } from '../../Layout';
import { Box } from '../../Layout/Box';

interface Props {
  count: number;
  size?: number;
}

const BaseText: React.FC<{
  text: string;
  count: number;
  size?: number;
}> = ({ text, count, size = 16 }) => {
  const { theme } = useLayout();

  return (
    <Box style={{ flexDirection: 'row' }}>
      <Text size={size} fontFamily={theme.fonts.inter.medium}>
        {count}
      </Text>
      <Text size={size} fontFamily={theme.fonts.inter.regular} color={theme.colors.darkenText}>
        {' '}
        {text}
      </Text>
    </Box>
  );
};

const UserFollowingText: React.FC<Props> = ({ count, size }) => {
  return <BaseText text={'Following'} count={count} size={size} />;
};

const UserFollowersText: React.FC<Props> = ({ count, size }) => {
  return <BaseText text={'Followers'} count={count} size={size} />;
};

const InlineUserFollowText: React.FC<{ followingCount: number; followerCount: number }> = ({
  followingCount,
  followerCount,
}) => {
  return (
    <Box style={{ flexDirection: 'row' }}>
      <UserFollowingText count={followingCount} />
      <Text>{'   '}</Text>
      <UserFollowersText count={followerCount} />
    </Box>
  );
};

export { UserFollowingText, UserFollowersText, InlineUserFollowText };
