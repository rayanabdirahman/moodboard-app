import React from 'react';

import { AuthStack, AuthRoutes } from './routes';

import SignUpScreen from '../../screens/Auth/SignUp';
import SignInScreen from '../../screens/Auth/SignIn';
import SplashScreen from '../../screens/Auth/Splash';

const AuthNavigation = (): React.ReactElement => {
  return (
    <AuthStack.Navigator initialRouteName={AuthRoutes.SPLASH}>
      <AuthStack.Screen name={AuthRoutes.SPLASH} component={SplashScreen} />
      <AuthStack.Screen name={AuthRoutes.SIGN_UP} component={SignUpScreen} />
      <AuthStack.Screen name={AuthRoutes.SIGN_IN} component={SignInScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigation;
