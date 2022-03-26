import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from '../../navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation isUserSignedIn={true} />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
