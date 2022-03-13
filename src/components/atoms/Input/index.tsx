import React from 'react';
import {
  Input as NBInput,
  IInputProps,
  FormControl,
  WarningOutlineIcon
} from 'native-base';

type Props = IInputProps & {
  isInvalid?: boolean;
  label?: string;
  errorMessage?: string;
};

const Input: React.FC<Props> = ({
  label,
  errorMessage,
  isInvalid,
  ...props
}) => (
  <FormControl isInvalid={isInvalid}>
    <FormControl.Label>{label}</FormControl.Label>
    <NBInput {...props} variant="underlined" />
    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
      {errorMessage}
    </FormControl.ErrorMessage>
  </FormControl>
);

export default Input;
