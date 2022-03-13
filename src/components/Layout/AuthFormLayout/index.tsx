import React from 'react';
import theme from '../../../constants/styles/theme';
import { VStack, Heading, Text } from '../../atoms';

export type Props = {
  heading: string;
  subHeading?: string;
};

const AuthFormLayout: React.FC<Props> = ({ children, ...props }) => (
  <VStack flex={1} px={5} pt={7} backgroundColor={theme.color.white}>
    <VStack flex={1} space={10}>
      <VStack justifyContent="flex-start" space={4}>
        <Heading color={theme.color.black} size="md">
          {props.heading}
        </Heading>
        {props.subHeading && <Text secondary>{props.subHeading}</Text>}
      </VStack>
      <VStack justifyContent="center" space={4}>
        {children}
      </VStack>
    </VStack>
  </VStack>
);

export default AuthFormLayout;
