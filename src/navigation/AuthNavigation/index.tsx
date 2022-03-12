import React from 'react';
import {
  AuthStack,
  AuthRoutes,
  SignUpStack,
  SignUpRoutes,
  SignInStack,
  SignInRoutes
} from './routes';
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
