// Mahsulotlar.js
import React from "react";
import styles from "./index.module.scss";
import { mahsulot } from "../../db/mahsulotlar";
import { NavLink } from "react-router-dom";
import Scale from "../../FrameMotion/scale";

export default function Mahsulotlar() {
  return (
    <div className={styles.mahsulot}>
      <p className={styles.mttl}>Наша продукция</p>
      <div className={styles.mbody}>
        {mahsulot.map((r) => (
          <Scale>
            <div className={styles.mgrp} key={r.id}>
              <img src={r.img} alt={r.ttl} />
              <p>{r.ttl}</p>
              <NavLink to={r.path}>
                <button>Подробное</button>
              </NavLink>
            </div>
          </Scale>
        ))}
      </div>
    </div>
  );
}
