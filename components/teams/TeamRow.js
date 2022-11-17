import styles from "./Teams.module.css";
import Image from "next/image";
import { priceByTier } from "../../helpers/constants";

export default function TeamRow({ team, mintPage, handleClick }) {
  return (
    <li
      className={mintPage ? styles.team + " " + styles.mintTeam : styles.team}
      onClick={mintPage ? () => handleClick(team) : null}
      style={team.loser ? { filter: `grayscale()` } : null}
      title={team.name + ": " + priceByTier[team.tier] + "$Matic"}
    >
      <div className={styles.flag}>
        <Image
          src={team.flag}
          alt={team.name + " flag"}
          width={40}
          height={25}
          layout="fixed"
        />
      </div>
      <p>{team.name}</p>
      {mintPage && (
        <span className={styles.price}>
          <p>{priceByTier[team.tier]}</p>
          <Image
            src="/matic.webp"
            alt="Matic token icon"
            width={15}
            height={15}
            layout="fixed"
          />
        </span>
      )}
    </li>
  );
}
