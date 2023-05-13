import { NextPageWithLayout } from "@/pages/_app";
import { Launchpad as LaunchpadFeature } from "@/features";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Launchpad: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Launchpad - XpandX Protocol</title>
        <meta
          name="description"
          content="Meta description for the Launchpad page"
        />
      </Head>
      <LaunchpadFeature />
    </>
  );
};

Launchpad.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Launchpad;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ["common"])),
      // Will be passed to the page component as props
    },
  };
};
