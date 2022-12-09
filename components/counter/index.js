import styles from "./Counter.module.css";
import Link from "next/link";
import { useCountdown } from "../../hooks/useCountdown";
import { CounterUnit } from "./CounterUnit";

export default function Counter() {
  const [days, hours, minutes, seconds, countDown] = useCountdown();

  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <div className={styles.separator}></div>
        <CounterUnit unit={countDown > 0 ? days : 0} text="Days" />
        <CounterUnit unit={countDown > 0 ? hours : 0} text="Hours" />
        <CounterUnit unit={countDown > 0 ? minutes : 0} text="Minutes" />
        <CounterUnit unit={countDown > 0 ? seconds : 0} text="Seconds" />
      </div>
      <div className={styles.cta}>
        <div className={styles.text}>
          <p>
            {countDown > 0
              ? "Until last mint day"
              : "Minting time has finished!"}
          </p>
        </div>
        {countDown > 0 && (
          <Link href="/mint">
            <p className={styles.mint}>Mint now!</p>
          </Link>
        )}
      </div>
    </div>
  );
}
