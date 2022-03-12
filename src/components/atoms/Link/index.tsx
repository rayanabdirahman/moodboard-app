import React from 'react';
import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import * as styled from './styled';

export type Props = RNTouchableOpacityProps & {
  primary?: boolean;
  secondary?: boolean;
};

const Link: React.FC<Props> = ({ children, ...props }) => (
  <styled.button {...props}>
    <styled.text primary={props.primary} secondary={props.secondary}>
      {children}
    </styled.text>
  </styled.button>
);

export default Link;
