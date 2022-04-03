import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from '../../navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAppSelector } from '../../state/hookTypes';
import { getIsAuthenticated } from '../../state/selectors/session';

export default function App() {
  const isAuthenticated = useAppSelector(getIsAuthenticated);
  return (
    <SafeAreaProvider>
      <Navigation isUserSignedIn={isAuthenticated} />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
