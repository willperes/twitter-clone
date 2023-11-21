import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Form } from './Form';
import * as S from './styles';
import { useAuthentication } from '../../../hooks/useAuthentication';

export const SignInScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const { handleSubmitSignIn } = useAuthentication();

  return (
    <S.Container style={{ paddingBottom: bottom }}>
      <Form onSubmit={handleSubmitSignIn} />
    </S.Container>
  );
};
