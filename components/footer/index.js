import styles from "./Footer.module.css";
import { Twitter } from "../../assets";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.msg}>
        <p>Made with ♥︎ by</p>
        <a
          className={styles.handler}
          href="https://twitter.com/FcoGomez92_"
          target="_blank"
          rel="noopener noreferrer"
        >
          @FcoGomez92_
        </a>
      </section>
      <a
        className={styles.twitter_icon}
        href="https://twitter.com/FWC22xyz"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter color="#fff" />
      </a>
      <section className={styles.code}>
        <a className={styles.handler} href="">
          Front Code
        </a>
        <a
          className={styles.handler}
          href="https://polygonscan.com/address/0x1238e99dc1e5fc740efa01c3bece97186a198020#code"
          target="_blank"
          rel="noreferrer"
        >
          Smart Contract
        </a>
      </section>
    </footer>
  );
}
