import React from 'react'

import styles from "./styles.module.css"
import ProductCard from '@/components/productCard/productCard';
import Imag1 from "../../assets/444444.png";


const products = [
  {
    id: 1,
    name: "Книга 1",
    price: 10,
    image: Imag1,
    link: "/products/papirus",
  },
  {
    id: 2,
    name: "Папирус 10 листов А3 формата.",
    price: 20,
    image: Imag1,
    link: "/products/papirus",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    image: Imag1,
    link: "/products/papirus",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    image: Imag1,
    link: "/products/papirus",
  },
];
const page = () => {
  return (
    <div className={styles.wrapper}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default page