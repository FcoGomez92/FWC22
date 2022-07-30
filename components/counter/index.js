import styles from "./Counter.module.css";
import { useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";

export default function Counter() {
  const [days, hours, minutes, seconds] = useCountdown();
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  function checkInput(input) {
    const pattern = /^0x[a-fA-F0-9]{40}$/;
    return pattern.test(input);
  }

  function handleSubmit() {
    const okAddress = checkInput(address);
    if (!okAddress) {
      setStatus("⛔️ Wallet doesn't fit the pattern.");
      return;
    }
    setStatus("⏳ Please, wait...");
    fetch("/api/addWallet", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setStatus(data.message);
          setAddress("");
        }
        setStatus(data.message);
      })
      .catch((err) => {
        console.log(err);
        setStatus("🚨Sorry, something went wrong.");
      });
  }

  if (days + hours + minutes + seconds <= 0) {
    return <h2>Pre-Mint Available</h2>;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.counter}>
          <div className={styles.separator}></div>
          <div className={styles.pair}>
            <div className={styles.round}>
              <p>{days}</p>
            </div>
            <span>Days</span>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.pair}>
            <div className={styles.round}>
              <p>{hours}</p>
            </div>
            <span>Hours</span>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.pair}>
            <div className={styles.round}>
              <p>{minutes}</p>
            </div>
            <span>Minutes</span>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.pair}>
            <div className={styles.round}>
              <p>{seconds}</p>
            </div>
            <span>Seconds</span>
          </div>
          <div className={styles.separator}></div>
        </div>
        <div className={styles.whitelist}>
          <div className={styles.text}>
            <p>To Whitelisted Mint</p>
          </div>
          <div className={styles.join}>
            <input
              type="text"
              placeholder="Paste your EVM compatible address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={handleSubmit}>JOIN</button>
          </div>
          <span>{status}</span>
        </div>
      </div>
    );
  }
}
