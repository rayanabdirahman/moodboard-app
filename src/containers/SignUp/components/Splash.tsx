import React from 'react';
import { Button } from '../../../components/atoms';
import { SplashLayout } from '../../../components/Layout';
import {
  AuthRoutes,
  SignInRoutes,
  SignUpRoutes
} from '../../../navigation/AuthNavigation/routes';
import { AuthNavigationProp } from '../../../navigation/types';

const SignUpContent = {
  heading: 'Sign up for moodboard',
  subHeading: 'Create a profile, shop and follow your favourite stores.'
};

type Props = {
  navigation: AuthNavigationProp<AuthRoutes.SIGN_UP>;
};

const SignUpSplashContainer: React.FC<Props> = ({ navigation }) => {
  return (
    <SplashLayout
      page="SignUp"
      heading={SignUpContent.heading}
      subHeading={SignUpContent.subHeading}
      footerLink={() =>
        navigation.navigate(AuthRoutes.SIGN_IN, { screen: SignInRoutes.SPLASH })
      }
    >
      <Button
        onPress={() =>
          navigation.navigate(AuthRoutes.SIGN_UP, {
            screen: SignUpRoutes.BIRTHDAY
          })
        }
        primary
      >
        Continue with email
      </Button>

      <Button onPress={() => console.log('testingggg')} secondary outlined>
        Continue with Google
      </Button>
    </SplashLayout>
  );
};

export default SignUpSplashContainer;
