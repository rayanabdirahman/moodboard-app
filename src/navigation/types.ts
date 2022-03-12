import { StackNavigationProp } from '@react-navigation/stack';
import {
  AuthRoutes,
  AuthStackParamList,
  SignUpRoutes,
  SignUpStackParamList
} from './AuthNavigation/routes';

export type AuthNavigationProp<
  RouteName extends keyof AuthStackParamList = AuthRoutes
> = StackNavigationProp<AuthStackParamList, RouteName>;

export type SignUpNavigationProp<
  RouteName extends keyof SignUpStackParamList = SignUpRoutes
> = StackNavigationProp<SignUpStackParamList, RouteName>;
