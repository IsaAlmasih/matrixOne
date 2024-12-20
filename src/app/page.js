import Image from "next/image";
import styles from "./page.module.css";
// import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MatrixRain } from "../components/MatrixRain/MatrixRain";
export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <textarea className={styles.text}>Выпущено тап 34.</textarea>
        </div>
        <div>
          <Link href={"/"} className={styles.text}>
            Стоимость тапы 20 рублей.
          </Link>
        </div>
        <div>
          <textarea className={styles.text}>
            Бюджет Акционерного общества 680 рублей.
          </textarea>
        </div>
        <div>
          <Link href={"/"} className={styles.text}>
            Школа призрака.
          </Link>
        </div>
        <div>
          <Link href={"/"} className={styles.text}>
            Книга Ключи.
          </Link>
        </div>
        <div>
          <Link href={"/products"} className={styles.text}>
            Наш Магазин.
          </Link>
        </div>
        <MatrixRain></MatrixRain>
      </div>
    </>
  );
}
