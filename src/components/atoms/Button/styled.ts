import styled, { css } from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import { Props } from '.';

export const button = styled(TouchableOpacity)<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.color.black : theme.color.brand};
  border-radius: 4px;
  border-width: 2px;
  border-color: ${({ theme, secondary }) =>
    secondary ? theme.color.black : theme.color.brand};
  padding: 8px 0;

  ${({ theme, outlined, secondary }) =>
    outlined &&
    css`
      background-color: ${theme.color.white};
      border-color: ${secondary ? theme.color.black : theme.color.brand};
    `}
`;

export const text = styled(Text)<Props>`
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.color.white};

  ${({ theme, outlined, secondary }) =>
    outlined &&
    css`
      color: ${secondary ? theme.color.black : theme.color.brand};
    `}
`;
