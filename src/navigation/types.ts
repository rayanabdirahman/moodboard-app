import { StackNavigationProp } from '@react-navigation/stack';
import { AuthRoutes, AuthStackParamList } from './AuthNavigation/routes';

export type AuthNavigationProp<
  RouteName extends keyof AuthStackParamList = AuthRoutes
> = StackNavigationProp<AuthStackParamList, RouteName>;
