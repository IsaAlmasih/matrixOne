"use client";
import React, { use, useEffect, useState } from "react";
import { MatrixRain } from "@/components/MatrixRain/MatrixRain";

import styles from "./styles.module.css";
import HTMLFlipBook from "react-pageflip";

import { useRouter } from "next/navigation";

const Book = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(1920);
  useEffect(() => {
    setWidth(screen.width);

    const windowResize = () => {
      setWidth(screen.width);
    };
    window.addEventListener("resize", windowResize);

    return () => {
      window.addEventListener("resize", windowResize);
    };
  }, []);

  useEffect(() => {
    if (width < 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);


  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper}>
        <HTMLFlipBook
          width={isMobile ? 330 : 550}
          height={isMobile ? 450 : 700}
          className={styles.book}
        >
          <div className={styles.firstPage}>
          </div>
          <div className={styles.secondPage}>
            <textarea
              name=""
              defaultValue="Привет привет привет привет"
            ></textarea>
          </div>
          <div className={styles.thirdPage}>
            <textarea name="" defaultValue="Дима, это победа."></textarea>
          </div>
          <div className={styles.secondPage}>
            <textarea
              name=""
              defaultValue="Привет Дима, это победа."
            ></textarea>
          </div>
          <div className={styles.firstPage}></div>
          <div className={styles.secondPage}></div>
          <div className={styles.firstPage}>Page 7</div>
          <div className={styles.secondPage}>Page 8</div>
        </HTMLFlipBook>
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

export default Book;
