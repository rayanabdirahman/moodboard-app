import React from 'react';
import AuthFormLayout from '../../../components/Layout/AuthFormLayout';
import { SignUpRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignUpNavigationProp } from '../../../navigation/types';

const Content = {
  heading: 'Create username',
  subHeading: 'You can always change this later.'
};

type Props = {
  navigation: SignUpNavigationProp<SignUpRoutes.USERNAME>;
};

const SignUpUsernameContainer: React.FC<Props> = ({ navigation }) => {
  return (
    <AuthFormLayout
      heading={Content.heading}
      subHeading={Content.subHeading}
    ></AuthFormLayout>
  );
};

export default SignUpUsernameContainer;
