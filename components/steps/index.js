import styles from "./Steps.module.css";
import { SeparatorBall, SeparatorsLeft, SeparatorsRight } from "../../assets";

export default function Steps() {
  return (
    <section id="how-it-works" className={styles.container}>
      <aside className={styles.separators}>
        <SeparatorsLeft color="#A02E4F" />
        <SeparatorBall color="#A02E4F" />
        <SeparatorsRight color="#A02E4F" />
      </aside>
      <div className={styles.flex}>
        <article className={styles.element}>
          <h3>1. Mint</h3>
          <p>
            Your preferred team, the strongest one, the team of your nation, or
            one of each. You can mint as many as you want!
          </p>
        </article>
        <article className={styles.element}>
          <h3>2. Hodl</h3>
          <p>
            Until the World Cup ends. While you are waiting, you can help us
            share the project. Each NFT minted increases the prize pool!
          </p>
        </article>
        <article className={styles.element}>
          <h3>3. Earn $MATIC!</h3>
          <p>
            If you hold at least one supporter NFT of the champion team...
            CONGRATULATION! You earn at least one share of the prize pool!
          </p>
        </article>
      </div>
      <aside className={styles.separators}>
        <SeparatorsLeft color="#A02E4F" />
        <SeparatorBall color="#A02E4F" />
        <SeparatorsRight color="#A02E4F" />
      </aside>
    </section>
  );
}
