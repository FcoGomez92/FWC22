import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Navbar from "../components/navbar";
import Counter from "../components/counter";
// import Rules from "../components/rules";
import { Ball } from "../assets";
import Roadmap from "../components/roadmap";

export default function Home() {
  const [tock, setTock] = useState(0);
  const [showElements, setShowElements] = useState(false);
  const handleClick = () => {
    if (tock === 2) {
      setShowElements(true);
    }
    setTock(tock + 1);
  };
  return (
    <div className={styles.container}>
      {showElements && <Navbar />}
      <Head>
        <title>FWC22 NFTs</title>
        <meta
          name="description"
          content="Football World Cup Qatar 2022 NFTs are here. Mint your national team supporter NFT and hold it until the final match. The holders of the winner team earn the prize pool!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{ display: showElements ? "none" : "" }}
        className={styles.tock_div}
        onClick={tock < 3 ? handleClick : null}
      ></div>
      <main>
        <section className={styles.landing}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Football World Cup
              <br />
              Qatar 2022
            </h1>
            {showElements && <h2 className={styles.subtitle}>NFT Edition</h2>}
          </div>
          {showElements && (
            <div className={styles.hide_elements}>
              <Counter />
              <Ball className={styles.ball} />
            </div>
          )}
        </section>
        {showElements && (
          <div className={styles.hide_elements}>
            <Roadmap />
          </div>
        )}

        {/* <Rules /> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://twitter.com/FcoGomez92_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ♥︎ by <span className={styles.handler}>@FcoGomez92_</span>
        </a>
      </footer> */}
    </div>
  );
}
