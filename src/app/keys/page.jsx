"use client";
import React from 'react'

import styles from './Keys.module.css'
import { Link } from 'next/link';

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <img src="11111.jpg" />
      {/* <a href="../../assets/files/Book_Keys.pdf" download>
        <button>Книга Ключи</button>
      </a> */}
      <a href="Vehnii.docx">Книга Вечный Завет.</a>
      <a href="/">Вернутся на главную.</a>
    </div>
  );
}
export default Page