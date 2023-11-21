import { type NavigatorScreenParams } from '@react-navigation/native';
import { type RootDrawerParamList } from './RootDrawerParamList';

export interface RootStackParamList {
  NotAuthenticatedScreen: undefined;
  SignUpScreen: undefined;
  RootDrawer: NavigatorScreenParams<RootDrawerParamList>;
}
