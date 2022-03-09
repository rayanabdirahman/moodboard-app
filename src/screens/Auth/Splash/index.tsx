import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import theme from '../../../constants/styles/Themes';

const splashImageRoute = require('../../../../assets/splash.png');

const SplashScreen: React.FC = () => {
  return (
    <ImageBackground
      style={{ flex: 1, backgroundColor: theme.color.brand }}
      source={splashImageRoute}
    />
  );
};

export default SplashScreen;
