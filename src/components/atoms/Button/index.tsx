import { IButtonProps as NBButtonProps } from 'native-base';
import * as styled from './styled';

export type Props = NBButtonProps & {
  primary?: boolean;
  secondary?: boolean;
  // outlined?: boolean;
};

const Button: React.FC<Props> = ({ children, ...props }) => (
  <styled.button {...props}>{children}</styled.button>
);

export default Button;
