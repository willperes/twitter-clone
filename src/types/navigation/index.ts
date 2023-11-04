import { type NavigatorScreenParams } from '@react-navigation/native';
import { type DrawerNavigatorParamList } from './DrawerNavigatorParamList';

export interface RootStackParamList {
  Home: NavigatorScreenParams<DrawerNavigatorParamList>;
}
