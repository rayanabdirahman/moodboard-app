import styled from 'styled-components/native';
import { Heading as NBHeading, Text as NBText } from 'native-base';
import { HeadingProps, TextProps } from '.';

export const heading = styled(NBHeading)<HeadingProps>`
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.color.black};
`;

export const text = styled(NBText)<TextProps>`
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme, secondary }) =>
    secondary ? theme.color.gray : theme.color.black};
`;
