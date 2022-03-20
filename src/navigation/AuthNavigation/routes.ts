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
  USERNAME = 'SignUpUsername',
  FEED = 'Feed'
}

export enum SignInRoutes {
  SPLASH = 'SignInSplash',
  FORM = 'SignInForm',
  FEED = 'Feed'
}

export type AuthStackParamList = {
  [AuthRoutes.SIGN_UP]: NavigatorScreenParams<SignUpStackParamList>;
  [AuthRoutes.SIGN_IN]: NavigatorScreenParams<SignInStackParamList>;
};

export type SignUpStackParamList = {
  [SignUpRoutes.SPLASH]: undefined;
  [SignUpRoutes.BIRTHDAY]: undefined;
  [SignUpRoutes.EMAIL]: undefined;
  [SignUpRoutes.PASSWORD]: undefined;
  [SignUpRoutes.USERNAME]: { oauthAccessToken: string } | undefined;
  [SignUpRoutes.FEED]: undefined;
};

export type SignInStackParamList = {
  [SignInRoutes.SPLASH]: undefined;
  [SignInRoutes.FORM]: undefined;
  [SignInRoutes.FEED]: undefined;
};

export const AuthStack = createStackNavigator<AuthStackParamList>();

export const SignUpStack = createStackNavigator<SignUpStackParamList>();

export const SignInStack = createStackNavigator<SignInStackParamList>();
