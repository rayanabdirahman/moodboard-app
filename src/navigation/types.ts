import { StackNavigationProp } from '@react-navigation/stack';
import {
  AuthRoutes,
  AuthStackParamList,
  SignInRoutes,
  SignInStackParamList,
  SignUpRoutes,
  SignUpStackParamList
} from './AuthNavigation/routes';

export type AuthNavigationProp<
  RouteName extends keyof AuthStackParamList = AuthRoutes
> = StackNavigationProp<AuthStackParamList, RouteName>;

export type SignUpNavigationProp<
  RouteName extends keyof SignUpStackParamList = SignUpRoutes
> = StackNavigationProp<SignUpStackParamList, RouteName>;

export type SignInNavigationProp<
  RouteName extends keyof SignInStackParamList = SignInRoutes
> = StackNavigationProp<SignInStackParamList, RouteName>;
