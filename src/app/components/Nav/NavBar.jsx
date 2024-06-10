"use client";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { links } from "./data.js";
import Button from "@/elements/Button/Button";
import Logo from "@/elements/logo/Logo";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

function NavBar() {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <Button />
      </div>
    </div>
  );
}

export default NavBar;
