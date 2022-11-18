import styles from "./Navbar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Wallet from "./Wallet";
import { Hamburguer, SeparatorBall } from "../../assets";

export default function Navbar() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={
        showMenu
          ? [styles.container, styles.show].join(" ")
          : [styles.container, styles.hide].join(" ")
      }
    >
      <span
        className={styles.hamburguer}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <Hamburguer color="#fff" />
      </span>
      <div className={styles.bkg}>
        <ul className={styles.list}>
          <li onClick={() => setShowMenu((prev) => !prev)}>
            <Link href="/">
              <span>
                <SeparatorBall color="#F3C041" />
              </span>
            </Link>
          </li>
          <li onClick={() => setShowMenu((prev) => !prev)}>
            <Link
              href={
                router.pathname === "/mint" || router.pathname === "/stats"
                  ? "/#how-it-works"
                  : "#how-it-works"
              }
            >
              <p>How it works</p>
            </Link>
          </li>
          <li onClick={() => setShowMenu((prev) => !prev)}>
            <Link
              href={
                router.pathname === "/mint" || router.pathname === "/stats"
                  ? "/#teams"
                  : "#teams"
              }
            >
              <p>Teams</p>
            </Link>
          </li>
          <li onClick={() => setShowMenu((prev) => !prev)}>
            <Link
              href={
                router.pathname === "/mint" || router.pathname === "/stats"
                  ? "/#faqs"
                  : "#faqs"
              }
            >
              <p>Faqs</p>
            </Link>
          </li>
          <li
            style={router.pathname === "/mint" ? { color: "#F3C041" } : null}
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <Link href="/mint">
              <p>Mint</p>
            </Link>
          </li>
          {/* <li
            style={router.pathname === "/stats" ? { color: "#F3C041" } : null}
          >
            <Link href="/stats">
              <p>Stats</p>
            </Link>
          </li> */}
        </ul>
        <Wallet />
      </div>
    </div>
  );
}
