import styles from "../../styles/Home.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import useContract from "../../hooks/useContract";
import { formatEther } from "ethers/lib/utils";

export default function PrizePool() {
  const [poolAmount, setPoolAmount] = useState("-");
  const [eventCounter, setEventCounter] = useState(0);
  const contract = useContract();

  useEffect(() => {
    getPrizePoolAmount();
  }, [eventCounter]);

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

  const getPrizePoolAmount = async () => {
    const response = await fetch(
      `https://api.polygonscan.com/api?module=account&action=balance&address=${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}&apikey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`
    );
    const data = await response.json();
    if (data && data.status === "1") {
      setPoolAmount(formatEther(data.result));
    }
  };

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
      <h3>Prize Pool:</h3>
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
