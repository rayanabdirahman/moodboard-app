import React from 'react';
import { Button } from '../../components/atoms';
import { SplashLayout } from '../../components/Layout';

const SignUpContent = {
  heading: 'Sign up for moodboard',
  subHeading: 'Create a profile, shop and follow your favourite stores.'
};

const SignUpContainer: React.FC = () => {
  return (
    <SplashLayout
      page="SignUp"
      heading={SignUpContent.heading}
      subHeading={SignUpContent.subHeading}
      footerLink={() => console.log('footer')}
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

export default SignUpContainer;
