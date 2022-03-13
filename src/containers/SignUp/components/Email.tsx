import React from 'react';
import { Formik } from 'formik';
import AuthFormLayout from '../../../components/Layout/AuthFormLayout';
import { SignUpRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignUpNavigationProp } from '../../../navigation/types';
import { SignUpValidationSchema } from '../../../validation/AccountValidation';
import { Stack } from 'native-base';
import { Button, Input } from '../../../components/atoms';

const Content = {
  heading: "What's your email address?",
  subHeading: "Your birthday won't be shown publicly."
};

type Props = {
  navigation: SignUpNavigationProp<SignUpRoutes.EMAIL>;
};

const SignUpEmailContainer: React.FC<Props> = ({ navigation }) => {
  const initialValues = { email: '' };
  const isLoading = false;
  return (
    <AuthFormLayout heading={Content.heading} subHeading={Content.subHeading}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpValidationSchema.EMAIL}
        onSubmit={(model) => console.log('signin model: ', model)}
      >
        {(formik) => (
          <Stack space={10}>
            <Input
              placeholder="Email address"
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              errorMessage={formik.errors.email}
              isInvalid={formik.errors.email ? true : false}
            />

            <Button
              onPress={() => formik.handleSubmit()}
              loading={isLoading}
              disabled={
                isLoading || !formik.isValid || !formik.dirty ? true : false
              }
            >
              Next
            </Button>
          </Stack>
        )}
      </Formik>
    </AuthFormLayout>
  );
};

export default SignUpEmailContainer;
