import styles from "./Navbar.module.css";
import { useEffect } from "react";
import Image from "next/image";
import { useUserContext } from "../../context/UserContext";
import useProvider from "../../hooks/useProvider";
import {
  connectWallet,
  checkChanges,
  switchNetworkToPolygon,
  formatAddress,
} from "../../helpers/walletFunctions";

export default function Wallet() {
  const { userInfo, setUserInfo } = useUserContext();
  const provider = useProvider();

  useEffect(() => {
    if (userInfo) {
      checkChanges(userInfo?.account);
    }
  }, [userInfo]);

  return (
    <>
      {!userInfo ? (
        <div className={styles.walletContainer + " " + styles.notConnected}>
          <button onClick={() => connectWallet(setUserInfo, provider)}>
            Connect Wallet
          </button>
        </div>
      ) : (
        <>
          <div className={styles.walletContainer}>
            <p>{formatAddress(userInfo.account)} /</p>
            <p>{userInfo.maticBalance}</p>
            <Image
              src="/matic.webp"
              alt="Matic token icon"
              width={15}
              height={15}
              layout="fixed"
            />
          </div>
          {userInfo.chainId &&
            userInfo.chainId !== parseInt(process.env.NEXT_PUBLIC_CHAIN_ID) && (
              <div className={styles.badNetwork}>
                <p>
                  Wrong network. Please, change to Polygon.{" "}
                  <span onClick={switchNetworkToPolygon}>Change</span>
                </p>
              </div>
            )}
        </>
      )}
    </>
  );
}
