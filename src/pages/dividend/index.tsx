import { NextPageWithLayout } from "@/pages/_app";
import { Dividend as DividendFeature } from "@/features";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Dividend: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dividend - XpandX Protocol</title>
        <meta
          name="description"
          content="Meta description for the Dividend page"
        />
      </Head>
      <DividendFeature />
    </>
  );
};

Dividend.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Dividend;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ["common"])),
      // Will be passed to the page component as props
    },
  };
};
