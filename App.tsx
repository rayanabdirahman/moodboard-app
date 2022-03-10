import React from 'react';
import useCachedResources from './src/hooks/utilities/useCachedResources';
import App from './src/screens/App';
import SplashScreen from './src/screens/Auth/Splash';

export default function (): JSX.Element {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <SplashScreen />;
  }
  return <App />;
}
