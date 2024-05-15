// Mahsulotlar.js
import React, { useEffect, useState } from "react";
import styles from "./mahsulot.module.scss";
import { NavLink } from "react-router-dom";
import Scale from "../../FrameMotion/scale";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import Info_load from "../../loadPart/info_load";
import No_result from "./no_result";

export default function Mahsulotlar() {
  const { t } = useTranslation();
  const { isLoading, data } = useQuery("mahsulot", async () => {
    const response = await fetch(
      "https://selenmebelapi20240307024627.azurewebsites.net/api/Categories"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return response.json(); // Parse response body as JSON
  });

  console.log(data);
  
  return (
    <div className={styles.mahsulot}>
      <p className={styles.mttl}>{t("b_mahsulot")}</p>
      <div className={styles.mbody}>
        {isLoading? <Info_load/>:data?data.map((r, index) => (
          <Scale>
            <div className={styles.mgrp} key={index}>
              <img
                src={`https://adminserenmebeluz.azurewebsites.net/${r.image}`}
                alt="stol va stullar"
              />
              <p>{r.name}</p>
              {r.typeOfFurnitures.length > 0 ? (
                <NavLink to={`/oraliq/${r.id}/${r.name}`}>
                  <button>{t("pod")}</button>
                </NavLink>
              ) : (
                <NavLink to={`/ofis/${r.id}/${r.name}`}>
                  <button>{t("pod")}</button>
                </NavLink>
              )}
            </div>
          </Scale>
        )):<No_result/>}
      </div>
    </div>
  );
}
