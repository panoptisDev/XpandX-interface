import {
  InputGroup,
  InputLeftElement,
  Input,
  InputProps,
  InputGroupProps,
} from "@chakra-ui/react";

interface IXInputProps extends InputProps {
  inputGroupProps?: InputGroupProps
  leftIcon?: React.ReactElement;
}

export const XInput = ({ children, leftIcon, inputGroupProps, ...props }: IXInputProps) => {
  return (
    <InputGroup {...inputGroupProps}>
      <Input {...props} />
      {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
    </InputGroup>
  );
};
