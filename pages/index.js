/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import PrizePool from "../components/prizePool";
import Counter from "../components/counter";
import Steps from "../components/steps";
import Teams from "../components/teams";
import Faqs from "../components/faqs";

export default function Home() {
  return (
    <>
      <Head>
        <title>FWC22 NFTs</title>
        <meta
          name="description"
          content="Football World Cup Qatar 2022 NFTs are here. Mint your national team supporter NFT and hold it until the final match. The holders of the winner team earn the prize pool in $MATIC!"
        />
      </Head>
      <div className={styles.container}>
        <main>
          <section className={styles.landing}>
            <div className={styles.header}>
              <h1 className={styles.title}>
                Football World Cup
                <br />
                Qatar 2022
              </h1>
              <h2 className={styles.subtitle}>Polygon NFTs</h2>
            </div>
            <PrizePool />
            <Counter />
            <img src="/preview.png" alt="" className={styles.hero} />
          </section>
          <Steps />
          <Teams header="Teams" />
          <Faqs />
        </main>
      </div>
    </>
  );
}
