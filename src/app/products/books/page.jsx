"use client";
import React, { use } from "react";
import styles from "./styles.module.css";
import { MatrixRain } from "@/components/MatrixRain/MatrixRain";

import image from "../../../assets/4444.png";
import image1 from "../../../assets/444444.png";
import image2 from "../../../assets/book4.jpg";

import { useRouter } from "next/navigation";

import ProductCard from "@/components/productCard/productCard";

const books = [
  {
    id: 1,
    type: "book",
    image,
    name: "Название книги 1",
    isbn: 123125135135,
    description: "Краткое описание",
    price: 2000,
    author: "Pushkin",
    link: "",
  },
  {
    id: 2,
    type: "book",
    image,
    name: "Название книги 2",
    isbn: 123125135135,
    description: "Краткое описание",
    price: 2000,
    author: "Pushkin",
    link: "",
  },
  {
    id: 3,
    type: "book",
    image,
    name: "Название книги 3",
    isbn: 123125135135,
    description: "Краткое описание",
    price: 2000,
    author: "Pushkin",
    link: "",
  },
  {
    id: 4,
    type: "book",
    image,
    name: "Название книги 4",
    isbn: 123125135135,
    description: "Краткое описание",
    price: 2000,
    author: "Pushkin",
    link: "",
  },
];

const page = () => {
  const images = [image.src, image1.src, image2.src];
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Это страница книг!</div>
      <div className={styles.image}>
        Книги
        <div className={styles.images}>
          {/* {" "}
          {images.map((src, index) => (
            <img key={index} src={src} />
          ))} */}
          {books && books.map((book) => <ProductCard product={book} />)}
        </div>
      </div>
      <button
        onClick={() => router.push("/products")}
        className={styles.button}
      >
        {"<--"}Назад
      </button>
    </div>
  );
};

export default page;
