import React from 'react';
import { Button } from '../../../components/atoms';
import { SplashLayout } from '../../../components/Layout';
import {
  AuthRoutes,
  SignInRoutes,
  SignUpRoutes
} from '../../../navigation/AuthNavigation/routes';
import { AuthNavigationProp } from '../../../navigation/types';
import useGoogleAuth from '../hooks/useGoogleAuth';

type Props = {
  navigation: AuthNavigationProp<AuthRoutes.SIGN_UP>;
};

const SignUpSplashContainer: React.FC<Props> = ({ navigation }) => {
  const { isLoading, onGoogleSignUp } = useGoogleAuth();
  const navigateToSignUpForm = () =>
    navigation.navigate(AuthRoutes.SIGN_UP, {
      screen: SignUpRoutes.EMAIL
    });
  return (
    <SplashLayout
      page="SignUp"
      heading="Sign up for moodboard"
      subHeading="Create a profile, shop and follow your favourite stores."
      footerLink={() =>
        navigation.navigate(AuthRoutes.SIGN_IN, { screen: SignInRoutes.SPLASH })
      }
    >
      <Button onPress={navigateToSignUpForm} primary>
        Continue with email
      </Button>

      <Button secondary outlined onPress={onGoogleSignUp} loading={isLoading}>
        Continue with Google
      </Button>
    </SplashLayout>
  );
};

export default SignUpSplashContainer;
