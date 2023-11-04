import { type NavigatorScreenParams } from '@react-navigation/native';
import { type BottomTabNavigatorParamList } from './BottomTabNavigatorParamList';

export interface DrawerNavigatorParamList {
  DrawerHome: NavigatorScreenParams<BottomTabNavigatorParamList>;
}
