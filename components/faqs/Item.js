import styles from "./Faqs.module.css";
import { useState } from "react";

export default function Item({ question, answer }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <li
      onClick={() => setIsCollapsed((prev) => !prev)}
      className={
        isCollapsed
          ? styles.item + " " + styles.collapsed
          : styles.item + " " + styles.expanded
      }
    >
      <div className={styles.header}>
        <i className={styles.toggle}>▶</i>
        <h4 className={styles.question}>{question}</h4>
      </div>
      <p className={styles.answer}>{answer}</p>
    </li>
  );
}
