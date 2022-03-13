import React from 'react';
import { SignUpStack, SignUpRoutes } from '../routes';
import {
  SignUpSplashScreen,
  SignUpBirthdayScreen,
  SignUpEmailScreen,
  SignUpPasswordScreen,
  SignUpUsernameScreen
} from '../../../screens/Auth/SignUp';
import BackButton from '../../BackButton';

const screenOptions = {
  headerTitle: 'Sign up',
  headerShadowVisible: false,
  headerBackTitle: ' ',
  headerBackImage: () => <BackButton />
};

const SignUpNavigation = (): React.ReactElement => {
  return (
    <SignUpStack.Navigator
      initialRouteName={SignUpRoutes.SPLASH}
      screenOptions={screenOptions}
    >
      <SignUpStack.Screen
        name={SignUpRoutes.SPLASH}
        component={SignUpSplashScreen}
        options={{
          ...screenOptions,
          headerTitle: '',
          headerLeft: () => null
        }}
      />
      <SignUpStack.Screen
        name={SignUpRoutes.BIRTHDAY}
        component={SignUpBirthdayScreen}
      />
      <SignUpStack.Screen
        name={SignUpRoutes.EMAIL}
        component={SignUpEmailScreen}
      />
      <SignUpStack.Screen
        name={SignUpRoutes.PASSWORD}
        component={SignUpPasswordScreen}
      />
      <SignUpStack.Screen
        name={SignUpRoutes.USERNAME}
        component={SignUpUsernameScreen}
      />
    </SignUpStack.Navigator>
  );
};

export default SignUpNavigation;
