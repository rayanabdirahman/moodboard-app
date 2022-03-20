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
  navigation: AuthNavigationProp<AuthRoutes.SIGN_IN>;
};

const SignInContainer: React.FC<Props> = ({ navigation }) => {
  const { isLoading, onGoogleSignIn } = useGoogleAuth();
  const navigateToSignForm = () =>
    navigation.navigate(AuthRoutes.SIGN_IN, {
      screen: SignInRoutes.FORM
    });

  return (
    <SplashLayout
      page="SignIn"
      heading="Sign into moodboard"
      subHeading="Create a profile, shop and follow your favourite stores."
      footerLink={() =>
        navigation.navigate(AuthRoutes.SIGN_UP, { screen: SignUpRoutes.SPLASH })
      }
    >
      <Button onPress={navigateToSignForm} primary>
        Continue with email
      </Button>

      <Button onPress={onGoogleSignIn} secondary outlined loading={isLoading}>
        Continue with Google
      </Button>
    </SplashLayout>
  );
};

export default SignInContainer;
