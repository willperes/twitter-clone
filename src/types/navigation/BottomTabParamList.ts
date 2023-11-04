import { type NavigatorScreenParams } from "@react-navigation/native";
import { type NotificationsTopTabParamList } from "./NotificationsTopTabParamList";

export interface BottomTabParamList {
    FeedTab: undefined;
    SearchTab: undefined;
    NotificationsTab: NavigatorScreenParams<NotificationsTopTabParamList>;
    DirectMessagesTab: undefined;
}