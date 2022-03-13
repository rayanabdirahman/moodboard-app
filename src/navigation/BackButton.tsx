import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../constants/styles/theme';

const BackButton = ({ onPress }: TouchableOpacityProps) => (
  <Ionicons
    onPress={onPress}
    size={24}
    name="chevron-back-outline"
    color={theme.color.black}
    style={{ marginLeft: 16 }}
  />
);

export default BackButton;
