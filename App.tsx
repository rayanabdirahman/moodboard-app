import React from 'react';
import { Provider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';
import { ThemeProvider } from 'styled-components';
import App from './src/screens/App';
import SplashScreen from './src/screens/Auth/Splash';
import useCachedResources from './src/hooks/utilities/useCachedResources';
import theme from './src/constants/styles/theme';
import { store } from './src/store';

export default function (): JSX.Element {
  const isLoadingComplete = useCachedResources();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NativeBaseProvider>
          {!isLoadingComplete ? <SplashScreen /> : <App />}
        </NativeBaseProvider>
      </ThemeProvider>
    </Provider>
  );
}
