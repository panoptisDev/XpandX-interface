import { NextPageWithLayout } from "@/pages/_app";
import { LaunchpadDetail as LaunchpadDetailFeature } from "@/features";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LaunchpadDetail: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>LaunchpadDetail - XpandX Protocol</title>
        <meta
          name="description"
          content="Meta description for the LaunchpadDetail page"
        />
      </Head>
      <LaunchpadDetailFeature />
    </>
  );
};

LaunchpadDetail.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default LaunchpadDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ["common"])),
      // Will be passed to the page component as props
    },
  };
};
