import { Header, Hero, SideContent, NumbereContent } from "@/components";
import { Fragment } from "react";
import { clsx } from "@/utils";
import Head from "next/head";
import style from "../styles/main.module.css";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="ione news newshomepage" />
        <title>News_Homepage</title>
        <link rel={"icon"} href={"/img/favicon-32x32.png"} />
      </Head>
      <Header />
      <main className={clsx(style.container)}>
        <Hero className={style.area_1} />
        <SideContent className={style.area_2} />
        <NumbereContent className={style.area_3} />
      </main>
    </Fragment>
  );
};

export default Home;
