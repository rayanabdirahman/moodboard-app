import React from 'react';
import { SignInStack, SignInRoutes } from '../routes';
import {
  SignInSplashScreen,
  SignInFormScreen
} from '../../../screens/Auth/SignIn';
import BackButton from '../../BackButton';
import FeedScreen from '../../../screens/Feed';

const screenOptions = {
  headerTitle: 'Sign in',
  headerShadowVisible: false,
  headerBackTitle: ' ',
  headerBackImage: () => <BackButton />
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
        options={{
          ...screenOptions,
          headerTitle: '',
          headerLeft: () => null
        }}
      />
      <SignInStack.Screen
        name={SignInRoutes.FORM}
        component={SignInFormScreen}
      />
      <SignInStack.Screen name={SignInRoutes.FEED} component={FeedScreen} />
    </SignInStack.Navigator>
  );
};

export default SignInNavigation;
