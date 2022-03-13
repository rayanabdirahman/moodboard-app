import React from 'react';
import { SignInStack, SignInRoutes } from '../routes';
import {
  SignInSplashScreen,
  SignInFormScreen
} from '../../../screens/Auth/SignIn';

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
      <SignInStack.Screen
        name={SignInRoutes.SPLASH}
        component={SignInSplashScreen}
      />
      <SignInStack.Screen
        name={SignInRoutes.FORM}
        component={SignInFormScreen}
      />
    </SignInStack.Navigator>
  );
};

export default SignInNavigation;
