import React, { useEffect } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import styles from "./index.module.scss";
import b1 from "../../assets/images/m8.jpg";
import b2 from "../../assets/images/seren/ayvon va zal/hi tech/image1.jpg";
import b3 from "../../assets/images/m12.jpg";
import b4 from "../../assets/images/seren/ayvon va zal/hi tech/image13.jpg";
import { imagesZalHi_tech } from "../../components/db/mahsulotlar";
import { useTranslation } from "react-i18next";
import { SiAntdesign } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { DiMaterializecss } from "react-icons/di";
import { FaFileContract } from "react-icons/fa6";

export default function Stol() {
  const { t } = useTranslation();
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      <div className={styles.bolalar}>
        <p className={styles.ttl}>Ayvon va Zal mebellari</p>
        <div className={styles.cnt}>
          <div className={styles.imgs}>
            <img src={b1} />
            <img src={b2} />
            <img src={b3} />
            <img src={b4} />
          </div>
          <div className={styles.bolatxt}>
            <p className={styles.txt}>{t("p4")}</p>
          </div>
        </div>
        <Malumot />
        <RasmlarPastki />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

function RasmlarPastki() {
  return (
    <div className={styles.rasmlar}>
      {imagesZalHi_tech.map((r) => (
        <div className={styles.rasm_grp1}>
          <img src={r.img} alt="rasm" />
          <p>{r.ttl}</p>
        </div>
      ))}
    </div>
  );
}

function Malumot() {
  const { t } = useTranslation();
  return (
    <div className={styles.malumot}>
      <p className={styles.ittl}>
      {t("olish_sabab")}
      </p>
      <div className={styles.fgrp}>
        <div className={styles.grp}>
          <SiAntdesign />
          <p className={styles.txt}>{t("x_txt1")}</p>
        </div>
        <div className={styles.grp}>
          <GrTechnology />
          <p className={styles.txt}>{t("x_txt5")}</p>
        </div>
        <div className={styles.grp}>
          <DiMaterializecss />
          <p className={styles.txt}>{t("x_txt8")}</p>
        </div>
        <div className={styles.grp}>
          <FaFileContract />
          <p className={styles.txt}>{t("x_txt11")}</p>
        </div>
      </div>
    </div>
  );
}
