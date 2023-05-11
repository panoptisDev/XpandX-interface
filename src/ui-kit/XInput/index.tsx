import {
  InputGroup,
  InputLeftElement,
  Input,
  InputProps,
} from "@chakra-ui/react";

interface IXInputProps extends InputProps {
  leftIcon?: React.ReactElement;
}

export const XInput = ({ children, leftIcon, ...props }: IXInputProps) => {
  return (
    <InputGroup>
      <Input {...props} />
      {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
    </InputGroup>
  );
};
