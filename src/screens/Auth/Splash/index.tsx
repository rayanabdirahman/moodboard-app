import React from 'react';
import { Spinner, VStack } from 'native-base';
import theme from '../../../constants/styles/theme';

const SplashScreen: React.FC = () => {
  return (
    <VStack
      flex={1}
      justifyContent="center"
      backgroundColor={theme.color.brand}
    >
      <Spinner size="lg" color={theme.color.white} />
    </VStack>
  );
};

export default SplashScreen;
