import React from "react";
import styles from "./index.module.scss";
import deco1 from "../../../assets/images/m1.jpg";
import deco3 from "../../../assets/images/m2.jpg";
import { useTranslation } from "react-i18next";

export default function Haqida() {
  const { t } = useTranslation();
  return (
    <div className={styles.haqida}>
      <div className={styles.f1}>
        <img src={deco1} />
        <div className={styles.txtgrp}>
          <p className={styles.ttl}>О КОМПАНИИ</p>
          <p className={styles.txt}>{t("p1")}</p>
          <img src={deco1} />
          <p className={styles.txt}>{t("p2")}</p>
        </div>
      </div>
      <div className={styles.alone}>
        <img src={deco3} />
      </div>
      <div className={styles.f2}>
        <div className={styles.txtgrp}>
          <p className={styles.txt}>{t("p3")}</p>
        </div>
        <img src={deco3} />
      </div>
    </div>
  );
}
