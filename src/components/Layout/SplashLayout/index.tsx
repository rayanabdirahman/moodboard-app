import React from 'react';
import theme from '../../../constants/styles/theme';
import { VStack, Heading, Text } from '../../atoms';

export type Props = {
  heading: string;
  subHeading: string;
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

    <VStack flex={0.2} backgroundColor={theme.color.gray_100}>
      <Text>Footer</Text>
    </VStack>
  </VStack>
);

export default SplashLayout;
