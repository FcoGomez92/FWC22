import styles from "./Navbar.module.css";
import { useState } from "react";
import { NavSide, Twitter, Hamburguer } from "../../assets";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={
        showMenu
          ? [styles.container, styles.hide].join(" ")
          : [styles.container, styles.show].join(" ")
      }
    >
      <span
        className={styles.hamburguer}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <Hamburguer color="#550065" />
      </span>
      <ul className={styles.list}>
        <li>
          <p>RoadMap</p>
          <span>SOON</span>
        </li>
        <li>
          <p>Team</p>
          <span>SOON</span>
        </li>
        <li>
          <p>Sponsors</p>
          <span>SOON</span>
        </li>
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
