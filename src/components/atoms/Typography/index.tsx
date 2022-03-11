import {
  IHeadingProps as NBHeadingProps,
  ITextProps as NBTextProps
} from 'native-base';
import * as styled from './styled';

export type HeadingProps = NBHeadingProps;

export type TextProps = NBTextProps & {
  secondary?: boolean;
};

export const Heading: React.FC<HeadingProps> = ({ children, ...props }) => (
  <styled.heading {...props}>{children}</styled.heading>
);

export const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <styled.text {...props}>{children}</styled.text>
);
