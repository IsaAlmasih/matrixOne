'use client'
// components/ProductCard.js
import Image from "next/image";
import styles from "./ProductCard.module.css";

import useStore from "../../stores/cart";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);
    const {
      cart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
    } = useStore();
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = (itemId) => {
      increaseQuantity(itemId);
      setQuantity(prev=>prev+1)
    };

    const handleDecrease = (itemId) => {
      decreaseQuantity(itemId);
      setQuantity((prev) => prev - 1);
    };
  return (
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
      <a href={product.link}>
        <button>Описание</button>
      </a>
      <button
        className={styles.button}
        onClick={() => {
          addToCart(product);
        }}
      >
        Добавить в корзину.
      </button>
      <span>
        {product.name} (x{quantity}) - {product.price}₽
      </span>
      <button
        onClick={() => handleIncrease(product.id)}
        style={{ marginLeft: "10px" }}
      >
        +
      </button>
      <button
        onClick={() => handleDecrease(product.id)}
        style={{ marginLeft: "5px" }}
      >
        -
      </button>
    </div>
  );
};

export default ProductCard;
