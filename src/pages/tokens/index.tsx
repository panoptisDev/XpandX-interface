import { NextPageWithLayout } from "@/pages/_app";
import { Tokens as TokensFeature } from "@/features";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Tokens: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Tokens - XpandX Protocol</title>
        <meta name="description" content="Meta description for the Tokens page" />
      </Head>
      <TokensFeature />
    </>
  );
};

Tokens.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Tokens;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ["common"])),
      // Will be passed to the page component as props
    },
  };
};
