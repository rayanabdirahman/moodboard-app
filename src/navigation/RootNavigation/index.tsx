import React from 'react';
import { RootRoutes, RootStack } from './routes';
import BottomTabNavigator from './BottomTabNavigator';

function RootNavigation() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={RootRoutes.ROOT}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}

export default RootNavigation;
