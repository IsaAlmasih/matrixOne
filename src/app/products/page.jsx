"use client";
import React from "react";

import styles from "./styles.module.css";
import ProductCard from "@/components/productCard/productCard";
import Imag1 from "../../assets/cat.jpg";
import Imag2 from "../../assets/book4.jpg";
import Imag3 from "../../assets/papir.png";
import Imag5 from "../../assets/2015.jpg";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Image from "next/image";
import Imag4 from "../../assets/мкм.jpg";

const products = [
  {
    id: 10,
    name: "Услуги",
    // price: 10,
    image: Imag1,
    // link: "https://1copy.ru/",
    link: "/products/services",

    // isCategory: true,
  },
  {
    id: 20,
    name: "Папирус.",
    // price: 20,
    image: Imag3,
    link: "/products/papirus",
    // isCategory: false,
  },
  {
    id: 30,
    name: "Книги",
    // price: 30,
    image: Imag2,
    link: "/products/books",
    // isCategory: false,
  },
  {
    id: 40,
    name: "Гирлянды",
    // price: 30,
    image: Imag5,
    link: "/products/hyrlands",
    // isCategory: false,
  },
];

const page = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapp}>
      <div>
        <Link href={"/cart"} className={styles.cart}>
          <Image src={Imag4} height={50} width={50} alt="Корзина" />
        </Link>
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
};

export default page;
