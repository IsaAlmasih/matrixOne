import Image from "next/image";
import styles from "./page.module.css";
// import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MatrixRain } from "../components/MatrixRain/MatrixRain";
export default function Home() {
  return (
    <>
        <nav className={styles.wrapper}>
          <Link href={"/"} className={styles.text}>
            Учение.
          </Link>
          <Link href={"/price"} className={styles.text}>
            Акционерное Общество Матрица.
          </Link>
          <Link href={"/keys"} className={styles.text}>
            Книги.
          </Link>
          <Link href={"/products"} className={styles.text}>
            Магазин
          </Link>
        <MatrixRain></MatrixRain>
        </nav>
    </>
  );
}