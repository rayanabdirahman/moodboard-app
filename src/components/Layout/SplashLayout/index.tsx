import React from 'react';
import theme from '../../../constants/styles/theme';
import { VStack, Heading, Text, Link, HStack } from '../../atoms';

export type Props = {
  page: 'SignUp' | 'SignIn';
  heading: string;
  subHeading: string;
  footerLink: () => void;
};

const SplashLayout: React.FC<Props> = ({ children, ...props }) => (
  <VStack flex={1} backgroundColor={theme.color.white}>
    <VStack flex={1} space={10} px={10}>
      <VStack justifyContent="center" space={4}>
        <Heading textAlign="center" color={theme.color.black} size="lg">
          {props.heading}
        </Heading>
        <Text textAlign="center" secondary>
          {props.subHeading}
        </Text>
      </VStack>
      <VStack justifyContent="center" space={4}>
        {children}
      </VStack>
    </VStack>

    <VStack
      flex={0.2}
      justifyContent="center"
      backgroundColor={theme.color.gray_100}
    >
      <HStack alignContent="center" justifyContent="center">
        {props.page === 'SignUp' ? (
          <>
            <Text textAlign="center" secondary>
              Already have an account?
            </Text>
            <Link secondary>Sign in</Link>
          </>
        ) : (
          <>
            <Text textAlign="center" secondary>
              Don’t have an account?
            </Text>
            <Link secondary>Sign up</Link>
          </>
        )}
      </HStack>
    </VStack>
  </VStack>
);

export default SplashLayout;
