"use client";
import React, { useRef } from 'react'

import styles from './styles.module.css'
import { Link } from 'next/link';

import imag from './154.jpg';
import imag1 from "./11111.jpg";

const Page = () => {
  const img1 = useRef(null); //useRef - это ссылка (null) = это значение. const img1 - это то куда пишем ссылку
  const onClick = () => {img1.current.style.width="400px"};
  return (
    <div className={styles.wrapper}>
      <div className={styles.imges}>
        <img src={imag1.src}ref={img1}onClick={onClick} />
        <img src={imag.src} />
      </div>
      <div className={styles.wrappe}>
        <a href="112.pdf" >Книга Вечный Завет.</a>
        <a href="1001.pdf">Книга Ключи.</a>
        <a href="/">Вернутся на главную.</a>
      </div>
    </div>
  );
}
export default Page