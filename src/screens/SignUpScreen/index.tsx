import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box } from '../../components/Layout/Box';
import { useLayout } from '../../hooks/useLayout';
import { Text } from '../../components/Layout';

export const SignUpScreen: React.FC = () => {
  const { theme } = useLayout();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.backgroundColor,
        justifyContent: 'space-between',
      }}
    >
      <Box justify={'space-between'} style={{ flex: 1 }} p={24}>
        <Text fontSize={'headlineSmall'} fontFamily={theme.fonts.inter.extraBold}>Create your account</Text>
      </Box>
    </SafeAreaView>
  );
};
