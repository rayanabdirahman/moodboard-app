import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';
import RootNavigation from './RootNavigation';

type Props = {
  isUserSignedIn: boolean;
};

export default function Navigation({ isUserSignedIn }: Props) {
  return (
    <NavigationContainer>
      {isUserSignedIn ? <RootNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
