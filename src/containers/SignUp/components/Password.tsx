import { Formik } from 'formik';
import { Stack } from 'native-base';
import React from 'react';
import { Button, Input } from '../../../components/atoms';
import AuthFormLayout from '../../../components/Layout/AuthFormLayout';
import { SignUpRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignUpNavigationProp } from '../../../navigation/types';
import { SignUpValidationSchema } from '../../../validation/AccountValidation';

type Props = {
  navigation: SignUpNavigationProp<SignUpRoutes.PASSWORD>;
};

const SignUpPasswordContainer: React.FC<Props> = ({ navigation }) => {
  const initialValues = { password: '' };
  const isLoading = false;
  return (
    <AuthFormLayout heading="Create password">
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpValidationSchema.PASSWORD}
        onSubmit={(model) => console.log('signin model: ', model)}
      >
        {(formik) => (
          <Stack space={10}>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              errorMessage={formik.errors.password}
              isInvalid={formik.errors.password ? true : false}
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

export default SignUpPasswordContainer;
