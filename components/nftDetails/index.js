import styles from "./NftDetails.module.css";
import Image from "next/image";
import { priceByTier, probabilityByTier } from "../../helpers/constants";

const description =
  "Football World Cup 2022 pfp collection. Challenge your friends, support your team during the FIFA World Cup Qatar 2022, and earn the prize pool in $MATIC.";

export default function NftDetails({ team, tokenId }) {
  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <Image
          src={team.image}
          alt={team.name + " supporter NFT"}
          width="300px"
          height="300px"
          layout="fixed"
        />
      </div>
      <div className={styles.data}>
        <div className={styles.dataPair}>
          <h3>Name:</h3>
          <p>
            {team.name} Supporter - FWC22 #{tokenId}
          </p>
        </div>
        <div className={styles.dataPair}>
          <h3>Description:</h3>
          <p>{description}</p>
        </div>
        <div className={styles.dataPair}>
          <h3>Initial Win Probability:</h3>
          <p>{probabilityByTier[team.tier]}</p>
        </div>
        <div className={styles.dataPair}>
          <h3>Status:</h3>
          <p>{team.loser ? "❌ Eliminated ❌" : "🏆 Champion 🏆"}</p>
        </div>
        <div className={styles.dataPair}>
          <h3>Price:</h3>
          <span className={styles.price}>
            <p>{priceByTier[team.tier]}</p>
            <Image
              src="/matic.webp"
              alt="Matic token icon"
              width={20}
              height={20}
              layout="fixed"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
