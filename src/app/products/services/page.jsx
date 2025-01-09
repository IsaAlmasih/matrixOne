"use client";
import React, { use } from "react";
import styles from "./styles.module.css";
// import { MatrixRain } from "@/components/MatrixRain/MatrixRain";

import image from "../../../assets/113111.jpg";
import image1 from "../../../assets/142221.jpg";
import image2 from "../../../assets/11111111.jpg";

import { useRouter } from "next/navigation";
const page = () => {
  const images = [image.src, image1.src, image2.src];
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Текст.</div>
      <div className={styles.image}>
        Картинки.
        <div className={styles.images}>
          {" "}
          {images.map((src, index) => (
            <img key={index} src={src} />
          ))}
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
