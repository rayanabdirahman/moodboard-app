import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import * as styled from './styled';

export type Props = RNTouchableOpacityProps & {
  primary?: boolean;
  secondary?: boolean;
  outlined?: boolean;
};

const Button: React.FC<Props> = ({ children, ...props }) => (
  <styled.button {...props}>
    <styled.text
      primary={props.primary}
      secondary={props.secondary}
      outlined={props.outlined}
    >
      {children}
    </styled.text>
  </styled.button>
);

export default Button;
