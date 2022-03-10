import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import theme from '../../../constants/styles/Themes';

const SplashScreen: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.color.brand
      }}
    >
      <ActivityIndicator size="large" color={theme.color.white} />
    </View>
  );
};

export default SplashScreen;
