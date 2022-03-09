import React from 'react';
import { ActivityIndicator } from 'react-native';
import useCachedResources from './src/hooks/utilities/useCachedResources';
import App from './src/screens/AppScreen';

export default function (): JSX.Element {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <ActivityIndicator />;
  }
  return <App />;
}
