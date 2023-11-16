import React from 'react';
import { useLayout } from '../../../hooks/useLayout';
import { Text } from '../../Layout';
import { Box } from '../../Layout/Box';
import { type DefaultTheme } from 'styled-components/native';

interface Props {
  count: number;
  fontSize?: keyof DefaultTheme['fontSizes'];
}

const BaseText: React.FC<{
  text: string;
} & Props> = ({ text, count, fontSize = 'bodyLarge' }) => {
  const { theme } = useLayout();

  return (
    <Box style={{ flexDirection: 'row' }}>
      <Text fontSize={fontSize} fontFamily={theme.fonts.inter.medium}>
        {count}
      </Text>
      <Text
        fontSize={fontSize}
        fontFamily={theme.fonts.inter.regular}
        color={theme.colors.darkenText}
      >
        {' '}
        {text}
      </Text>
    </Box>
  );
};

const UserFollowingText: React.FC<Props> = ({ count, fontSize }) => {
  return <BaseText text={'Following'} count={count} fontSize={fontSize} />;
};

const UserFollowersText: React.FC<Props> = ({ count, fontSize }) => {
  return <BaseText text={'Followers'} count={count} fontSize={fontSize} />;
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
