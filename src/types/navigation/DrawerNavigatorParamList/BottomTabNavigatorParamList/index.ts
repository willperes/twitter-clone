import { type NavigatorScreenParams } from '@react-navigation/native';
import { type NotificationsTopTabParamList } from './NotificationsTopTabParamList';
import { type SearchStackNavigator } from './SearchStackNavigator';

export interface BottomTabNavigatorParamList {
  FeedBottomTab: undefined;
  SearchBottomTab: NavigatorScreenParams<SearchStackNavigator>;
  NotificationsBottomTab: NavigatorScreenParams<NotificationsTopTabParamList>;
  DirectMessagesBottomTab: undefined;
}
