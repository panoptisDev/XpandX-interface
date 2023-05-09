import { NextPageWithLayout } from "@/pages/_app";
import { Swap as SwapFeature } from "@/features";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Swap: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Swap - XpandX Protocol</title>
        <meta name="description" content="Meta description for the Swap page" />
      </Head>
      <SwapFeature />
    </>
  );
};

Swap.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Swap;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ["common"])),
      // Will be passed to the page component as props
    },
  };
};
