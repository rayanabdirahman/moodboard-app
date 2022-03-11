import React from 'react';
import { VStack as NBVStack } from 'native-base';
import { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack';

export type Props = IVStackProps;

const VStack: React.FC<Props> = ({ children, ...props }) => (
  <NBVStack {...props}>{children}</NBVStack>
);

export default VStack;
