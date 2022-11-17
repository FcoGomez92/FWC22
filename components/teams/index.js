import styles from "./Teams.module.css";
import { groupsData } from "../../helpers/groupsData";
import Group from "./Group";

export default function Teams({ header, mintPage, handleClick }) {
  return (
    <section
      id={!mintPage ? "teams" : null}
      className={mintPage ? styles.mintContainer : styles.homeContainer}
    >
      <h2>{header}</h2>
      <div className={styles.flex}>
        {groupsData.map((g) => (
          <Group
            key={g.title}
            title={g.title}
            teams={g.teams}
            mintPage={mintPage}
            handleClick={handleClick}
          />
        ))}
      </div>
    </section>
  );
}
