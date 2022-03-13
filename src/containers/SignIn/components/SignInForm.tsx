import React from 'react';
import AuthFormLayout from '../../../components/Layout/AuthFormLayout';
import { SignInRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignInNavigationProp } from '../../../navigation/types';

const Content = {
  heading: 'Welcome back',
  subHeading: 'Enter your email address and password to continue.'
};

type Props = {
  navigation: SignInNavigationProp<SignInRoutes.FORM>;
};

const SignInFormContainer: React.FC<Props> = ({ navigation }) => {
  return (
    <AuthFormLayout
      heading={Content.heading}
      subHeading={Content.subHeading}
    ></AuthFormLayout>
  );
};

export default SignInFormContainer;
