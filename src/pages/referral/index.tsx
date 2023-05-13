import { NextPageWithLayout } from "@/pages/_app";
import { Referral as ReferralFeature } from "@/features";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Referral: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Referral - XpandX Protocol</title>
        <meta
          name="description"
          content="Meta description for the Referral page"
        />
      </Head>
      <ReferralFeature />
    </>
  );
};

Referral.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Referral;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ["common"])),
      // Will be passed to the page component as props
    },
  };
};
