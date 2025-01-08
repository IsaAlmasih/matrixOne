"use client";
import React from 'react'

import styles from './Keys.module.css'
import { Link } from 'next/link';



const Page = () => {
  const openPDF=()=>{window.open("Klyuchi_Ot_19.08.23.docx",'_blank');}
  return (
    <div className={styles.wrapper}>
      <img src="11111.jpg"/>
      <button onClick={openPDF}>Книга Ключи.</button>
      <a href="Vehnii.docx">Книга Вечный Завет.</a>
      <a href="/">Вернутся на главную.</a>
    </div>
  );
}
export default Page