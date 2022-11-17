import styles from "./Faqs.module.css";
import Link from "next/link";
import { faqs } from "../../helpers/faqs";
import Item from "./Item";

export default function Faqs() {
  return (
    <section id="faqs" className={styles.container}>
      <h2>FAQs</h2>
      <ul className={styles.accordion}>
        {faqs.map((faq, i) => (
          <Item key={i} question={faq.question} answer={faq.answer} />
        ))}
      </ul>
      <Link href="/mint">
        <p className={styles.mint}>Mint now!</p>
      </Link>
    </section>
  );
}
