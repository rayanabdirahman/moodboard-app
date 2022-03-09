import { createStackNavigator } from '@react-navigation/stack';

export enum AuthRoutes {
  LOADING = 'Loading',
  SPLASH = 'Splash',
  SIGN_UP = 'SignUp',
  SIGN_IN = 'SignIn'
}

export type AuthStackParamList = {
  [AuthRoutes.LOADING]: undefined;
  [AuthRoutes.SPLASH]: undefined;
  [AuthRoutes.SIGN_UP]: undefined;
  [AuthRoutes.SIGN_IN]: undefined;
};

export const AuthStack = createStackNavigator<AuthStackParamList>();
