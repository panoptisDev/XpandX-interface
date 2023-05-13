import { NextPageWithLayout } from "@/pages/_app";
import { Analytics as AnalyticsFeature } from "@/features";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Analytics: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Analytics - XpandX Protocol</title>
        <meta
          name="description"
          content="Meta description for the Analytics page"
        />
      </Head>
      <AnalyticsFeature />
    </>
  );
};

Analytics.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Analytics;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ["common"])),
      // Will be passed to the page component as props
    },
  };
};
