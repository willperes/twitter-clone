import { type NavigatorScreenParams } from '@react-navigation/native';
import { type RootDrawerParamList } from './RootDrawerParamList';

export interface RootStackParamList {
  RootDrawer: NavigatorScreenParams<RootDrawerParamList>;
}
