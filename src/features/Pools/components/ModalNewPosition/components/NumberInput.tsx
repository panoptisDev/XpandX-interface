import {
  Flex,
  useNumberInput,
  UseNumberInputProps,
  Button,
  Input,
} from "@chakra-ui/react";
import { MinusIcon, PlusIcon } from "@/icons";

interface Props extends UseNumberInputProps {}

export const NumberInput = ({ ...props }: Props) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.01,
      precision: 2,
      ...props,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <Flex>
      <Button
        bg="text.600"
        rounded="6px"
        w="28px"
        minW="28px"
        h="28px"
        color="text.50"
        p="0px"
        _hover={{
          filter: "brightness(0.95)",
        }}
        {...dec}
      >
        <MinusIcon />
      </Button>
      <Input border="none" textAlign="center" fontSize="xl" {...input} />
      <Button
        bg="text.600"
        rounded="6px"
        w="28px"
        minW="28px"
        h="28px"
        color="text.50"
        p="0px"
        _hover={{
          filter: "brightness(0.95)",
        }}
        {...inc}
      >
        <PlusIcon />
      </Button>
    </Flex>
  );
};
