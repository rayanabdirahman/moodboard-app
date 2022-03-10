import { createStackNavigator } from '@react-navigation/stack';

export enum AuthRoutes {
  SIGN_UP = 'SignUp',
  SIGN_IN = 'SignIn'
}

export type AuthStackParamList = {
  [AuthRoutes.SIGN_UP]: undefined;
  [AuthRoutes.SIGN_IN]: undefined;
};

export const AuthStack = createStackNavigator<AuthStackParamList>();
