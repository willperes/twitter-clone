import { type NavigatorScreenParams } from '@react-navigation/native';
import { type NotificationsTopTabParamList } from './NotificationsTopTabParamList';
import { type SearchStackParamList } from './SearchStackParamList';

export interface RootBottomTabParamList {
  FeedScreen: undefined;
  SearchScreen: NavigatorScreenParams<SearchStackParamList>;
  NotificationsScreen: NavigatorScreenParams<NotificationsTopTabParamList>;
  MessagesScreen: undefined;
}
