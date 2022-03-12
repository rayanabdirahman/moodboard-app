import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export enum AuthRoutes {
  SIGN_UP = 'SignUp',
  SIGN_IN = 'SignIn'
}

export enum SignUpRoutes {
  SPLASH = 'SignUpSplash',
  BIRTHDAY = 'SignUpBirthday',
  EMAIL = 'SignUpEmail',
  PASSWORD = 'SignUpPassword',
  USERNAME = 'SignUpUsername'
}

export type SignUpStackParamList = {
  [SignUpRoutes.SPLASH]: undefined;
  [SignUpRoutes.BIRTHDAY]: undefined;
  [SignUpRoutes.EMAIL]: undefined;
  [SignUpRoutes.PASSWORD]: undefined;
  [SignUpRoutes.USERNAME]: undefined;
};

export type AuthStackParamList = {
  [AuthRoutes.SIGN_UP]: NavigatorScreenParams<SignUpStackParamList>;
  [AuthRoutes.SIGN_IN]: undefined;
};

export const AuthStack = createStackNavigator<AuthStackParamList>();

export const SignUpStack = createStackNavigator<SignUpStackParamList>();
