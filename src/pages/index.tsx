import { NextPageWithLayout } from "@/pages/_app";
import { Swap as SwapFeature } from "@/features";
import { MainLayout } from "@/layouts/MainLayout";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home - XpandX Protocol</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      Home
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
