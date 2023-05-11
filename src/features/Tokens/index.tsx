import { XContainer } from "@/ui-kit";
import {
  Stack
} from '@chakra-ui/react';
import { useTranslation } from "next-i18next";
import { TokensHeader, TokensTable } from "./components";


export const Tokens = () => {
  const { t } = useTranslation();

  return (
    <XContainer>
      <Stack spacing={4}>
        <TokensHeader />
        <TokensTable />
      </Stack>
    </XContainer>
  )
}
