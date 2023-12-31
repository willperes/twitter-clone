import React from 'react';
import { Form } from './Form';
import * as S from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuthentication } from '../../../hooks/useAuthentication';

export const SignUpScreen: React.FC = () => {
  const { bottom } = useSafeAreaInsets();
  const { handleSubmitSignUp } = useAuthentication();

  return (
    <S.Container style={{ paddingBottom: bottom }}>
      <Form onSubmit={handleSubmitSignUp} />
    </S.Container>
  );
};
