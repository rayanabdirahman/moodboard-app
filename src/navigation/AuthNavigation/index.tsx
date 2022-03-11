import React from 'react';

import { AuthStack, AuthRoutes } from './routes';

import SignUpScreen from '../../screens/Auth/SignUp';
import SignInScreen from '../../screens/Auth/SignIn';

const AuthNavigation = (): React.ReactElement => {
  return (
    <AuthStack.Navigator
      initialRouteName={AuthRoutes.SIGN_UP}
      screenOptions={{
        headerTitle: '',
        headerShadowVisible: false
      }}
    >
      <AuthStack.Screen name={AuthRoutes.SIGN_UP} component={SignUpScreen} />
      <AuthStack.Screen name={AuthRoutes.SIGN_IN} component={SignInScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigation;
