import { NextPageWithLayout } from "@/pages/_app";
import { Pools as PoolsFeature } from "@/features";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Pools: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Pools - XpandX Protocol</title>
        <meta name="description" content="Meta description for the Pools page" />
      </Head>
      <PoolsFeature />
    </>
  );
};

Pools.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Pools;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ["common"])),
      // Will be passed to the page component as props
    },
  };
};
