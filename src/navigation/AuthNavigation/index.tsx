import React from 'react';
import { AuthStack, AuthRoutes, SignUpStack, SignUpRoutes } from './routes';
import SignUpScreen from '../../screens/Auth/SignUp';
import SignInScreen from '../../screens/Auth/SignIn';

const screenOptions = {
  headerTitle: '',
  headerShadowVisible: false,
  headerLeft: () => null
};

const SignUpNavigation = (): React.ReactElement => {
  return (
    <SignUpStack.Navigator
      initialRouteName={SignUpRoutes.SPLASH}
      screenOptions={screenOptions}
    >
      <SignUpStack.Screen name={SignUpRoutes.SPLASH} component={SignUpScreen} />
    </SignUpStack.Navigator>
  );
};

const AuthNavigation = (): React.ReactElement => {
  return (
    <AuthStack.Navigator
      initialRouteName={AuthRoutes.SIGN_UP}
      screenOptions={screenOptions}
    >
      <AuthStack.Screen
        name={AuthRoutes.SIGN_UP}
        component={SignUpNavigation}
      />
      <AuthStack.Screen name={AuthRoutes.SIGN_IN} component={SignInScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigation;
