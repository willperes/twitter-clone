import { type NavigatorScreenParams } from "@react-navigation/native";
import { type BottomTabParamList } from "./BottomTabParamList";

export interface RootStackParamList {
  Home: NavigatorScreenParams<BottomTabParamList>;
}
