import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabParamList } from './BottomTabNavigator/routes';

export enum RootRoutes {
  ROOT = 'Root',
  MODAL = 'Modal',
  NOT_FOUND = 'NotFound'
}

export type RootParamList = {
  [RootRoutes.ROOT]: NavigatorScreenParams<BottomTabParamList> | undefined;
  [RootRoutes.MODAL]: undefined;
  [RootRoutes.NOT_FOUND]: undefined;
};

export const RootStack = createStackNavigator<RootParamList>();
