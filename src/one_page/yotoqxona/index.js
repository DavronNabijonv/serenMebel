import React, { useEffect, useState } from "react";
import stylesb from "../bolalar/index.module.scss";
import styles from "./index.module.scss";
import b1 from "../../assets/images/m1.jpg";
import b2 from "../../assets/images/m9.jpg";
import b3 from "../../assets/images/seren/yotoqxona/image9.jpg";
import b4 from "../../assets/images/seren/yotoqxona/image3.jpg";
import { imagesYotoqxona } from "../../components/db/mahsulotlar";
import { useTranslation } from "react-i18next";
import { SiAntdesign } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { DiMaterializecss } from "react-icons/di";
import { FaFileContract } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Yotoqxona() {
  const { t } = useTranslation();
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={styles.bolalar}>
        <p className={styles.ttl}>{t("m6")}</p>
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
    </div>
  );
}

function RasmlarPastki() {
  const {t}= useTranslation();
  const [tag10,setTag10] = useState('imagesYotoqxona');
  return (
    <div className={stylesb.rasmlar}>
      {imagesYotoqxona.map((r,index) => (
        <div className={stylesb.rasm_grp1}>
          <img src={r.img} alt="rasm" />
          <p>{r.ttl}</p>
          <button>{t("pod")}</button>
          <Link to={`/items/${tag10}/${index}`}>
            <div className={stylesb.hover_effect}>
              <button>{t("pod")}</button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

function Malumot() {
  const { t } = useTranslation();
  return (
    <div className={styles.malumot}>
      <p className={styles.ittl}>{t("olish_sabab")}</p>
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
