import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import { Props } from '.';

export const button = styled(TouchableOpacity)<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
`;

export const text = styled(Text)<Props>`
  font-family: ${({ theme }) => theme.font.bold};
  color: ${({ theme, secondary }) =>
    secondary ? theme.color.brand : theme.color.black};
`;
