import styles from "./Teams.module.css";
import TeamRow from "./TeamRow";

export default function Group({ title, teams, mintPage, handleClick }) {
  return (
    <article className={styles.group}>
      <ul className={styles.list}>
        <li className={styles.title}>{title}</li>
        {teams.map((t) => (
          <TeamRow
            key={t.id}
            team={t}
            mintPage={mintPage}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </article>
  );
}
