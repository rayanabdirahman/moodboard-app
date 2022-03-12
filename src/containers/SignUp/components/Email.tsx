import React from 'react';
import AuthFormLayout from '../../../components/Layout/AuthFormLayout';
import { SignUpRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignUpNavigationProp } from '../../../navigation/types';

const Content = {
  heading: "What's your email address?",
  subHeading: "Your birthday won't be shown publicly."
};

type Props = {
  navigation: SignUpNavigationProp<SignUpRoutes.EMAIL>;
};

const SignUpEmailContainer: React.FC<Props> = ({ navigation }) => {
  return (
    <AuthFormLayout
      heading={Content.heading}
      subHeading={Content.subHeading}
    ></AuthFormLayout>
  );
};

export default SignUpEmailContainer;
