"use client"
import React, { use, useEffect, useState } from 'react'
import styles from './styles1.module.css'
import { MatrixRain } from '@/components/MatrixRain/MatrixRain';

import styles1 from "./styles.module.css";
import HTMLFlipBook from "react-pageflip";

import image1 from "../../../assets/papir/papir6.jpg";
import image2 from "../../../assets/papir/papir8.jpg";
import image3 from "../../../assets/papir/papir9.jpg";
import image4 from "../../../assets/papir/papyrus1.jpg";
import image5 from "../../../assets/papir/papyrus2.jpg";
import image6 from "../../../assets/papir/papyrus3.jpg";
import image7 from "../../../assets/papir/papyrus4.jpg";
import image8 from "../../../assets/papir/papyrus5.jpg";
import image9 from "../../../assets/papir/papyrus6.jpg";
import image10 from "../../../assets/papir/papyrus7.jpg";
import image11 from "../../../assets/papir/papyrus8.jpg";
import image12 from "../../../assets/papir/papyrus9.jpg";
import image13 from "../../../assets/papir/papyrus10.jpg";
import image14 from "../../../assets/papir/papyrus11.jpg";
import image15 from "../../../assets/papir/papyrus11.jpg";
import image16 from "../../../assets/papir/papyrus13.jpg";
import image17 from "../../../assets/papir/papyrus14.jpg";
import image18 from "../../../assets/papir/000010.jpg";


import { useRouter } from 'next/navigation';

const page = () => {
  const [isMobile,setIsMobile]=useState(false)
  const [width, setWidth]=useState(1920)
  useEffect(()=>{
    setWidth(screen.width);
    
    const windowResize=()=>{
      setWidth(screen.width);
    }
    window.addEventListener("resize",windowResize)

    return()=>{
      window.addEventListener("resize", windowResize);
    }
  },[])

  useEffect(()=>{
    if (width < 480){
      setIsMobile(true)
    }
    else {setIsMobile(false)

    }
  },[width])

  const images = [
    image1.src,
    image2.src,
    image3.src,
    image4.src,
    image5.src,
    image6.src,
];
  const images1 = [
    image11.src,
    image12.src,
    image13.src,
    image14.src,
    image15.src,
    image16.src,
  ];
 
  const router=useRouter()
  return (
    <div className={styles.wrapper}>
      <center className={styles.text}>Текст. <br/>Сюда я так полагаю нужны карточки с видами папируса</center>
      {/* <div className={styles.image}>
        Картинки.
        <div className={styles.images}>
        {images.map((src, index) => (
            <img key={index} src={src} />
          ))}
        </div>
        <div className={styles.images1}>
          {images1.map((src, index) => (
            <img key={index} src={src} />
          ))}
        </div>
      </div> */}
      <div className={styles1.wrapper}>
        <HTMLFlipBook
          width={isMobile ? 330 : 550}
          height={isMobile ? 450 : 700}
          className={styles1.book}
        >
          <div className={styles1.firstPage}>
            <div className={styles.images}>
              {images.map((src, index) => (
                <img key={index} src={src} />
              ))}
            </div>
          </div>
          <div className={styles1.secondPage}>
            <textarea
              name=""
              defaultValue="Привет привет привет привет"
            ></textarea>
          </div>
          <div className={styles1.thirdPage}>
            <textarea name="" defaultValue="Дима, это победа."></textarea>
          </div>
          <div className={styles1.secondPage}>
            <textarea
              name=""
              defaultValue="Привет Дима, это победа."
            ></textarea>
          </div>
          <div className={styles1.firstPage}></div>
          <div className={styles1.secondPage}></div>
          <div className={styles1.firstPage}>Page 7</div>
          <div className={styles1.secondPage}>Page 8</div>
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
}

export default page