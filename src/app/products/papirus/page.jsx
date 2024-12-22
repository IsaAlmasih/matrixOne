"use client"
import React, { use } from 'react'
import styles from './styles.module.css'
import { MatrixRain } from '@/components/MatrixRain/MatrixRain';

import image from '../../../assets/4444.png';
import image1 from "../../../assets/444444.png";
import image2 from "../../../assets/book4.jpg";
const page = () => {
  const images = [
    image.src, image1.src, image2.src,
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Текст.</div>
      <div className={styles.image}>
        Картинки.
        <div className={styles.images}>
          {" "}
          {images.map((src) => (
            <img src={src} />
          ))}
        </div>
      </div>
      <button onClick={() => router.push("/")} className={styles.button}>
        {"<--"}Назад
      </button>

    </div>
  );
}

export default page