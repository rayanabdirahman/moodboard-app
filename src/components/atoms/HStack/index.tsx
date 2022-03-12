import React from 'react';
import { HStack as NBHStack } from 'native-base';
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';

export type Props = IHStackProps;

const HStack: React.FC<Props> = ({ children, ...props }) => (
  <NBHStack {...props}>{children}</NBHStack>
);

export default HStack;
