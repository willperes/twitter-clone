import { type NavigatorScreenParams } from '@react-navigation/native';
import { type RootDrawerParamList } from './RootDrawerParamList';

export interface RootStackParamList {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  RootDrawer: NavigatorScreenParams<RootDrawerParamList>;
}
