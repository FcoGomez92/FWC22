import styles from "./Navbar.module.css";
import { NavSide, Twitter } from "../../assets";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>RoadMap</li>
        <li>Team</li>
        <li>Sponsors</li>
        <li>
          <a href="mailto:info@fwc22.xyz">Contact</a>
        </li>
        <li>
          <a
            href="https://twitter.com/FWC22xyz"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter color="#A02E4F" />
          </a>
        </li>
      </ul>
      <NavSide className={styles.nav_side} />
    </div>
  );
}
