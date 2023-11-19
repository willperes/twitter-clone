import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box } from '../../components/Layout/Box';
import { useLayout } from '../../hooks/useLayout';
import { useSignUp } from '../../hooks/useSignUp';
import { Form } from './Form';

export const SignUpScreen: React.FC = () => {
  const { theme } = useLayout();
  const { handleSubmitSignUp } = useSignUp();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.backgroundColor,
      }}
    >
      <Box justify={'space-between'} style={{ flex: 1 }} p={24}>
        <Form onSubmit={handleSubmitSignUp} />
      </Box>
    </SafeAreaView>
  );
};
