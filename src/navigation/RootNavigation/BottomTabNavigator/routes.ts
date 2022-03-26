import { NavigatorScreenParams } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export enum BottomTabRoutes {
  FEED = 'Feed',
  DISCOVER = 'Discover',
  INBOX = 'Inbox',
  PROFILE = 'Profile'
}

export type BottomTabParamList = {
  [BottomTabRoutes.FEED]: undefined;
  [BottomTabRoutes.DISCOVER]: undefined;
  [BottomTabRoutes.INBOX]: undefined;
  [BottomTabRoutes.PROFILE]: undefined;
};

export const BottomTab = createBottomTabNavigator<BottomTabParamList>();
