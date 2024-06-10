import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Post({ params }) {
  const product = await getData(params.id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={product.thumbnail}
            alt="post image"
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((image) => (
            <Image
              key={product.id}
              src={image}
              alt={product.title}
              width={200}
              height={200}
            />
          ))}
        </div>
        {/* <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem maiores incidunt ex cum, nemo sapiente quae, sint
          asperiores id deleniti numquam, animi placeat adipisci rem accusamus
          totam voluptas? Officia ullam, quaerat harum quas sequi molestias est
          sit impedit, culpa et obcaecati aliquam aliquid eveniet delectus. Quos
          culpa, accusamus distinctio sapiente delectus modi illum maiores, qui
          quo quidem magnam, omnis quod voluptatum quibusdam tempore libero.
          Perspiciatis adipisci exercitationem, perferendis, quos blanditiis
          excepturi maxime atque ipsa culpa ab eum et cumque nulla saepe.
          Voluptate a doloremque quibusdam eaque molestias! Vitae, at iste
          delectus nobis minima quae nihil adipisci, est, tempora illum fugit.
        </p> */}
      </div>
    </div>
  );
}

export default Post;
