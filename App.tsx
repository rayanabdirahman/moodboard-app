import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { ThemeProvider } from 'styled-components';
import App from './src/screens/App';
import SplashScreen from './src/screens/Auth/Splash';
import useCachedResources from './src/hooks/utilities/useCachedResources';
import theme from './src/constants/styles/theme';

export default function (): JSX.Element {
  const isLoadingComplete = useCachedResources();
  return (
    <ThemeProvider theme={theme}>
      <NativeBaseProvider>
        {!isLoadingComplete ? <SplashScreen /> : <App />}
      </NativeBaseProvider>
    </ThemeProvider>
  );
}
