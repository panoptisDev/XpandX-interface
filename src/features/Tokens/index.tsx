import { XContainer } from "@/ui-kit";
import { Stack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { TokensCards, TokensHeader, TokensTable } from "./components";
import { useState } from "react";

export const Tokens = () => {
  const { t } = useTranslation();
  const [layout, setLayout] = useState("cards");

  return (
    <XContainer>
      <Stack spacing={4}>
        <TokensHeader layout={layout} setLayout={setLayout} />
        {layout === "table" ? <TokensTable /> : <TokensCards />}
      </Stack>
    </XContainer>
  );
};
