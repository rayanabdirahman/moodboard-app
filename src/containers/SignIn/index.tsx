import React from 'react';
import { Button } from '../../components/atoms';
import { SplashLayout } from '../../components/Layout';
import { AuthRoutes } from '../../navigation/AuthNavigation/routes';
import { AuthNavigationProp } from '../../navigation/types';

const SignInContent = {
  heading: 'Sign into moodboard',
  subHeading: 'Create a profile, shop and follow your favourite stores.'
};

type Props = {
  navigation: AuthNavigationProp<AuthRoutes.SIGN_IN>;
};

const SignInContainer: React.FC<Props> = ({ navigation }) => {
  return (
    <SplashLayout
      page="SignIn"
      heading={SignInContent.heading}
      subHeading={SignInContent.subHeading}
      footerLink={() => navigation.navigate(AuthRoutes.SIGN_UP)}
    >
      <Button onPress={() => console.log('testingggg')} primary>
        Continue with email
      </Button>

      <Button onPress={() => console.log('testingggg')} secondary outlined>
        Continue with Google
      </Button>
    </SplashLayout>
  );
};

export default SignInContainer;
