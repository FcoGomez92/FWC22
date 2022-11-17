import styles from "./Counter.module.css";

export function CounterUnit({ unit, text }) {
  return (
    <>
      <div className={styles.pair}>
        <div className={styles.round}>
          <p>{unit}</p>
        </div>
        <span>{text}</span>
      </div>
      <div className={styles.separator}></div>
    </>
  );
}
