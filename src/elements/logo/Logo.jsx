import Link from "next/link";
import styles from "./logo.module.css";

function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      HexaShop
    </Link>
  );
}

export default Logo;
