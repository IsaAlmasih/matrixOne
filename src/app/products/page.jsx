"use client"
import React from 'react'

import styles from "./styles.module.css"
import ProductCard from '@/components/productCard/productCard';
import Imag1 from "../../assets/4444.png";
import Imag2 from "../../assets/book4.jpg";
import Imag3 from "../../assets/papir.png";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Image from "next/image";
import Imag4 from '../../assets/мкм.jpg'


const products = [
  {
    id: 1,
    name: "Услуги",
    // price: 10,
    image: Imag2,
    link: "https://1copy.ru/",
  },
  {
    id: 2,
    name: "Папирус.",
    // price: 20,
    image: Imag2,
    link: "/products/papirus",
  },
  {
    id: 3,
    name: "Книги",
    // price: 30,
    image: Imag2,
    link: "/products/papirus",
  },
  {
    id: 4,
    name: "Краски",
    // price: 30,
    image: Imag2,
    link: "/products/papirus",
  },
];
const page = () => {
  const router=useRouter()
  return (
    <div className={styles.wrapp}>
      <div>
        <Link href={"/cart"} className={styles.cart}><Image src={Imag4} height={50} width={50} alt='Корзина'/></Link>
      </div>
      <div className={styles.wrapper}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button onClick={() => router.push("/")} className={styles.button}>
        {"<--"}Назад
      </button>
    </div>
  );
}

export default page