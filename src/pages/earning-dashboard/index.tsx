import { NextPageWithLayout } from "@/pages/_app";
import { EarningDashboard as EarningDashboardFeature } from "@/features";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const EarningDashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>EarningDashboard - XpandX Protocol</title>
        <meta name="description" content="Meta description for the Earnings Dashboard page" />
      </Head>
      <EarningDashboardFeature />
    </>
  );
};

EarningDashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default EarningDashboard;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ["common"])),
      // Will be passed to the page component as props
    },
  };
};
