import React from 'react';
import { AuthStack, AuthRoutes, SignInStack, SignInRoutes } from './routes';
import SignInScreen from '../../screens/Auth/SignIn';
import SignUpNavigation from './navigators/SignUpNavigation';

const screenOptions = {
  headerTitle: '',
  headerShadowVisible: false,
  headerLeft: () => null
};

const SignInNavigation = (): React.ReactElement => {
  return (
    <SignInStack.Navigator
      initialRouteName={SignInRoutes.SPLASH}
      screenOptions={screenOptions}
    >
      <SignInStack.Screen name={SignInRoutes.SPLASH} component={SignInScreen} />
    </SignInStack.Navigator>
  );
};

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
