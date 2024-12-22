'use client'
// components/ProductCard.js
import Image from "next/image";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <a href={product.link}>
    <div className={styles.card}>
      <Image
        src={product.image}
        alt={product.name}
        className={styles.image}
        width={200}
        height={200}
      />
      <h3 className={styles.name}>{product.name}</h3>
      {/* <p className={styles.price}>{product.price}p</p> */}
      <button
        className={styles.button}
        onClick={() => alert("Товар добавлен в карзину")}
      >
        Добавить в корзину.
      </button>
    </div>
    </a>
  );
};

export default ProductCard;
