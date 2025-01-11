"use client";
import React from "react";
import styles from "./styles.module.css";

import { useRouter } from "next/navigation";

const page = () => {
const router=useRouter()
  return (
    <div className={styles.wrapper}>
      <center>
        <p>
          Здравствуйте. На данном этапе мы только формируем всё и согласовываем
          все составляющие. Если вы хотите продать свою акцию, напишите на адрес
          этой почты{" "}
          <a href="https://tapa-peach.vercel.app/"> imperiya66.ru@gmail.com </a>
          вам заплатят за возврат акции. Ваш скан акции должен быть один в один
          с нашим сканом вашей акции. Второй момент. Вы можете проявить терпение
          подождав, когда акция тапы вырастит в цене, а после её продать. Есть
          третий способ. Вы можете как владелец тапы принимать участие в жизни
          нашей формирующийся компании. По всем вопросам напишите по адресу
          выше.
        </p>
      </center>      
      <button onClick={() => router.push("/")} className={styles.butt}>
                {"<--"}Назад
      </button>
    </div>

  );
};

export default page;
