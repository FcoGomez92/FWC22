import styles from "../styles/Mint.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useUserContext } from "../context/UserContext";
import useProvider from "../hooks/useProvider";
import useContract from "../hooks/useContract";
import { parseEther } from "ethers/lib/utils";
import Modal from "../components/modal";
import NftDetails from "../components/nftDetails";
import Teams from "../components/teams";
import { Ball } from "../assets";
import { priceByTier } from "../helpers/constants";

const url = "https://fwc22.xyz";
const scannerUrl = "https://polygonscan.com";

const statusStyle = {
  init: { backgroundColor: "#EFE2B3" },
  loading: { backgroundColor: "#b8b8b866" },
  success: { backgroundColor: "#00CFB780", color: "#550065" },
  error: { backgroundColor: "#FF004980" },
};

export default function MintPage() {
  const [selectedTeam, setSelectedTeam] = useState(false);
  const [currentTokenId, setCurrentTokenId] = useState("");
  const [status, setStatus] = useState("");

  const { userInfo } = useUserContext();
  const provider = useProvider();
  const contract = useContract(provider?.getSigner(), userInfo?.chainId);

  const text = `I have minted the ${selectedTeam.name} Supporter nº${currentTokenId} of @fwc22xyz NFT Collection and now I'm eligible to earn the $MATIC prize pool. Mint yours now, support your team and join the competition!`;
  const shareUrl = `https://twitter.com/share?url=${url}&text=${text}&hashtags=FifaWorldCup,NFTCollection,Choose2Earn`;

  useEffect(() => {
    if (contract) {
      loadCurrentTokenId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract, selectedTeam]);

  const handleClick = (team) => {
    setSelectedTeam(team);
  };

  const loadCurrentTokenId = async () => {
    try {
      const lastTokenMinted = await contract.totalSupply();
      const current = parseInt(lastTokenMinted) + 1;
      setCurrentTokenId(current);
    } catch (e) {
      console.log(e);
    }
  };

  const supportTeam = async (id) => {
    const value = parseEther(priceByTier[selectedTeam.tier]);
    try {
      setStatus({
        type: "init",
        message: "Going to pop wallet now to sign the transaction...",
        url: "",
      });
      const txn = await contract.supportTeam(id, { value });
      setStatus({
        type: "loading",
        message: "Minting your team supporter... please wait.",
        url: `${scannerUrl}/tx/${txn.hash}`,
      });
      await txn.wait();

      setStatus({
        type: "success",
        message: "Minted! Best of lucks for your team in the World Cup!",
        url: `${scannerUrl}/tx/${txn.hash}`,
      });
    } catch ({ error }) {
      const data = error?.data;
      const message =
        data && data?.message?.startsWith("execution reverted: ")
          ? data?.message?.split("execution reverted: ")[1]
          : "Something went wrong, please try again.";
      setStatus({
        type: "error",
        message,
        url: "",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Mint FWC22 NFTs</title>
        <meta
          name="description"
          content="Mint Page of Football World Cup Qatar 2022 NFTs are here. Mint your national team supporter NFT and hold it until the final match. The holders of the winner team earn the prize pool in $MATIC!"
        />
      </Head>
      <Modal
        show={!!selectedTeam}
        onClose={() => {
          setSelectedTeam(false);
          setStatus("");
        }}
      >
        <h2>{selectedTeam.name}</h2>
        <NftDetails team={selectedTeam} tokenId={currentTokenId} />
        <div className={styles.mintInfo}>
          <button
            disabled={
              !contract || status.type === "init" || status.type === "loading"
            }
            onClick={() => supportTeam(selectedTeam.id)}
            className={styles.mint}
            style={!contract ? { filter: "grayscale()" } : null}
          >
            {status.type === "init" || status.type === "loading" ? (
              <div className={styles.spinner}></div>
            ) : (
              "Mint"
            )}
          </button>
          <p className={styles.txInfo} style={statusStyle[status.type]}>
            {status?.message}
            {status.url && (
              <span>
                <a href={status.url} target="_blank" rel="noreferrer">
                  View Tx
                </a>
              </span>
            )}
          </p>
        </div>
        {status.type === "success" && (
          <div className={styles.share}>
            <p>
              Now, why not to{" "}
              <span>
                <a href={shareUrl} target="_blank" rel="noreferrer">
                  share
                </a>
              </span>{" "}
              this project? Each NFT minted increase the prize pool!
            </p>
          </div>
        )}
      </Modal>
      <main className={styles.container}>
        <Ball className={styles.ball} />
        <Teams
          header="Seleact a team to mint"
          mintPage
          handleClick={handleClick}
        />
      </main>
    </>
  );
}
