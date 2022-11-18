import styles from "./Counter.module.css";
import Link from "next/link";
import { useCountdown } from "../../hooks/useCountdown";
import { CounterUnit } from "./CounterUnit";

export default function Counter() {
  const [days, hours, minutes, seconds] = useCountdown();

  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <div className={styles.separator}></div>
        <CounterUnit unit={days} text="Days" />
        <CounterUnit unit={hours} text="Hours" />
        <CounterUnit unit={minutes} text="Minutes" />
        <CounterUnit unit={seconds} text="Seconds" />
      </div>
      <div className={styles.cta}>
        <div className={styles.text}>
          <p>Until the next price increase</p>
        </div>
        <Link href="/mint">
          <p className={styles.mint}>Mint now!</p>
        </Link>
      </div>
    </div>
  );
}
