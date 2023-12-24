import React from "react";
import styles from "./index.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Asosiy() {
  return (
    <div className={styles.asosiy}>
      <div className={styles.grp}>
        <p className={styles.ttl}>Shamollift</p>
        <p className={styles.txt}>
          Мы предоставляем нашим клиентам самое современное лифтовое
          оборудование и полный спектр услуг от проектирования до ремонта
          пассажирских, кухонных, строительных, автомобильных и грузовых лифтов,
          а также эскалаторов.
        </p>
        <button>Hoziroq bog`laning  <FaArrowRightLong/></button>
      </div>
    </div>
  );
}
