import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins';

export default function useCachedResources(): boolean {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      console.log('[useCachedResources] - Caching resources started');
      try {
        // Load fonts
        await Font.loadAsync({
          Poppins: Poppins_400Regular,
          Poppins_bold: Poppins_600SemiBold,
          ...Ionicons.font
        });
      } catch (e) {
        console.error(
          `[useCachedResources] - error when loading resources: ${e}`
        );
      } finally {
        setLoadingComplete(true);
        console.log('[useCachedResources] - Caching resources completed');
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
