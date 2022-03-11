import styled, { css } from 'styled-components/native';
import { Button as NBButton } from 'native-base';
import { Props } from '.';

export const button = styled(NBButton)<Props>`
  font-family: ${({ theme }) => theme.font.regular};
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.color.black : theme.color.brand};

  ${({ theme, variant, secondary }) =>
    variant === 'outline' &&
    css`
      background-color: ${theme.color.white};
      border-width: 2px;
      border-color: ${secondary ? theme.color.black : theme.color.brand};
      color: ${secondary ? theme.color.black : theme.color.brand};
    `}
`;
