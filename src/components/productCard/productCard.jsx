'use client'
// components/ProductCard.js
import Image from "next/image";
import styles from "./ProductCard.module.css";

import useStore from "../../stores/cart";

const ProductCard = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);
  const clearCart = useStore((state) => state.clearCart);
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
      <p className={styles.price}>{product.price}p</p>
      <button
        className={styles.button}
        onClick={() =>{addToCart(
          product
        )}}
      >
        Добавить в корзину.
      </button>
    </div>
    </a>
  );
};

export default ProductCard;
