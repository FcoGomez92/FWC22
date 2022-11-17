import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import useProvider from "../../hooks/useProvider";
import useContract from "../../hooks/useContract";
import { getPrizePoolAmount } from "../../helpers/walletFunctions";

export default function PrizePool() {
  const [poolAmount, setPoolAmount] = useState("100.0");
  const [eventCounter, setEventCounter] = useState(0);
  const provider = useProvider();
  const contract = useContract();

  useEffect(() => {
    if (provider) {
      getPrizePoolAmount(setPoolAmount, provider);
    }
  }, [provider, eventCounter]);

  useEffect(() => {
    if (contract) {
      setupEventListener();
    }

    return () => {
      if (!contract) {
        return;
      }
      contract.off("NewContribution");
      contract.off("NewSupporter");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract]);

  const setupEventListener = async () => {
    try {
      contract.on("NewContribution", (user, amount) => {
        setEventCounter((prev) => prev + 1);
      });
      contract.on("NewSupporter", (user, tokenId, team) => {
        setEventCounter((prev) => prev + 1);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.poolAmountContainer}>
      <h3>Current Prize Pool:</h3>
      <span>
        {poolAmount}{" "}
        <Image
          src="/matic.webp"
          alt="Matic token icon"
          width={30}
          height={30}
          layout="fixed"
        />
      </span>
    </div>
  );
}
