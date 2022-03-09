import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';

export default function Navigation() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
