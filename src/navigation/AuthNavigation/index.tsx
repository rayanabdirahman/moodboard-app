import React from 'react';
import { AuthStack, AuthRoutes } from './routes';
import SignUpNavigation from './navigators/SignUpNavigation';
import SignInNavigation from './navigators/SignInNavigation';

const AuthNavigation = (): React.ReactElement => {
  return (
    <AuthStack.Navigator
      initialRouteName={AuthRoutes.SIGN_UP}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen
        name={AuthRoutes.SIGN_UP}
        component={SignUpNavigation}
      />
      <AuthStack.Screen
        name={AuthRoutes.SIGN_IN}
        component={SignInNavigation}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
