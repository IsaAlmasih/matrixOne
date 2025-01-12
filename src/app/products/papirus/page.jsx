"use client"
import React, { use } from 'react'
import styles from './styles.module.css'
import { MatrixRain } from '@/components/MatrixRain/MatrixRain';

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
// import image12 from "../../../assets/papir/papyrus9.jpg";
// import image13 from "../../../assets/papir/papyrus10.jpg";
// import image14 from "../../../assets/papir/papyrus11.jpg";
// import image15 from "../../../assets/papir/papyrus12.jpg";
// import image16 from "../../../assets/papir/papyrus13.jpg";
// import image17 from "../../../assets/papir/papyrus14.jpg";
// import image18 from "../../../assets/papir/000010.jpg";
// import image19 from "../../../assets/papir/000008.jpg";
// import image20 from "../../../assets/papir/000001.jpg";
// import image21 from "../../../assets/papir/000011.jpg";


import { useRouter } from 'next/navigation';

const page = () => {
  const images = [
    image1.src,
    image2.src,
    image3.src,
    image4.src,
    image5.src,
    image6.src,
    image7.src,
    image8.src,
    image9.src,
    image10.src, ];
  // const images1 = [
  //   image11.src,
  //   image12.src,
  //   image13.src,
  //   image14.src,
  //   image15.src,
  //   image16.src,
  //   image17.src,
  //   image18.src,
  //   image19.src,
  //   image20.src,
  // ];
 
  const router=useRouter()
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Текст.</div>
      <div>Сюда я так полагаю нужны карточки с видами папируса. </div>
      <div className={styles.image}>
        Картинки.
        <div className={styles.images}>
          {" "}
          {images.map((src, index) => (
            <img key={index} src={src} />
          ))}
        </div>
        {/* <div className={styles.images1}>
          {" "}
          {images.map((src, index) => (
            <img key={index} src={src} />
          ))}
        </div> */}
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