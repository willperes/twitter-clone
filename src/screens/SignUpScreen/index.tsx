import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box } from '../../components/Layout/Box';
import { useLayout } from '../../hooks/useLayout';
import { Button } from '../../components/Buttons/Button';
import { useSignUp } from '../../hooks/useSignUp';
import { Form } from './Form';

export const SignUpScreen: React.FC = () => {
  const { theme } = useLayout();
  const { control, errors, isSubmitting, handleSubmit } = useSignUp();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.backgroundColor,
      }}
    >
      <Box justify={'space-between'} style={{ flex: 1 }} p={24}>
        <Box>
          <Form control={control} errors={errors} />
        </Box>

        <Box>
          <Button
            disabled={isSubmitting}
            title={'Submit'}
            buttonSize={'large'}
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};
