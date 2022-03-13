import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';
import { Spinner } from 'native-base';
import * as styled from './styled';
import theme from '../../../constants/styles/theme';

export type Props = RNTouchableOpacityProps & {
  primary?: boolean;
  secondary?: boolean;
  outlined?: boolean;
  loading?: boolean;
};

const Button: React.FC<Props> = ({ children, ...props }) => (
  <styled.button {...props}>
    {props.loading ? (
      <Spinner color={theme.color.gray} />
    ) : (
      <styled.text
        primary={props.primary}
        secondary={props.secondary}
        outlined={props.outlined}
        disabled={props.disabled}
      >
        {children}
      </styled.text>
    )}
  </styled.button>
);

export default Button;
