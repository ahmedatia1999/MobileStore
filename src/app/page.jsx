import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/images/Hero.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online Shop destination!</h1>
        <p className={styles.description}>
          Discover a world of endless shopping possibilities at our online
          store. Discover a world of endless shopping possibilities at our
          online store.
        </p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image className={styles.img} src={Hero} alt="hero" />
      </div>
    </div>
  );
}
