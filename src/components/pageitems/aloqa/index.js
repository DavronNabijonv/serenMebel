import React from "react";
import styles from "./index.module.scss";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Aloqa() {
  return (
    <div className={styles.aloqa}>
      <div className={styles.container}>
        <div className={styles.f1}>
          <p className={styles.ttl}>Связаться с нами</p>
          <form>
            <p className={styles.fttl}>
              Номер телефона <span>*</span>
            </p>
            <input type="text" placeholder="Номер телефона" />
            <p className={styles.fttl}>Сообщение</p>
            <textarea placeholder="Сообщение" />
            <button className={styles.btn}>
              ОСТАВИТЬ ЗАЯВКУ <FaArrowRightLong />
            </button>
          </form>
          <p className={styles.tel}>
            <FaPhoneAlt /> +998 91 214 34 72
          </p>
          <p className={styles.tel}>
            <IoMdMail /> Sardorusmon111@gmail.com
          </p>
          <p className={styles.tel}>
            <FaLocationDot /> Manzilga Toshkent shahar Yashnabod tumani Olmos
            mahallasi Yakkatol 3-tor ko`chasi 38 uy
          </p>
        </div>
        <div className={styles.f2}>
          <iframe
            width="100%"
            height="450"
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=Manzilga+Toshkent+shahar+Yashnabod+tumani+Olmos+mahallasi+Yakkatol+3-tor+ko%E2%80%99chasi+38+uy&key=AIzaSyA-YgNEw2WDvbRixmD8lpNdwHo3qb-k-m0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
