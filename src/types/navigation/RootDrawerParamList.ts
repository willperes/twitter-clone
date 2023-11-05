import { type NavigatorScreenParams } from '@react-navigation/native';
import { type RootBottomTabParamList } from './RootBottomTabParamList';

export interface RootDrawerParamList {
  RootBottomTab: NavigatorScreenParams<RootBottomTabParamList>;
}
