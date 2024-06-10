import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch(
    "https://dummyjson.com/products/category/smartphones"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Blog() {
  const data = await getData();
  const products = data.products;

  return (
    <div className={styles.mainContainer}>
      {products.map((product) => (
        <Link
          href={`/blog/${product.id}`}
          className={styles.post}
          key={product.id}
        >
          <div className={styles.imageConatiner}>
            <Image
              src={product.thumbnail}
              className={styles.image}
              width={325}
              height={250}
              alt="post image"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.text}>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
