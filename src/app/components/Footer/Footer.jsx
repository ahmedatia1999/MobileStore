import styles from "./footer.module.css";
import Image from "next/image";
import { icons } from "./data.js";

function Footer() {
  return (
    <div className={styles.container}>
      <div>©2025 HexaShop. All rights reserved.</div>
      <div className={styles.social}>
        {icons.map((icon) => (
          <Image
            src={icon.src}
            width={20}
            height={20}
            className={styles.icon}
            alt={icon.alt}
            key={icon.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Footer;
