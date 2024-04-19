// Mahsulotlar.js
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import Scale from "../../FrameMotion/scale";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import Info_load from "../../loadPart/info_load";
import No_result from "./no_result";

export default function Mahsulotlar() {
  const { t } = useTranslation();
  const categories_api_url = `https://selenmebelapi20240307024627.azurewebsites.net/api/Categories`;
  const { isLoading, error, data } = useQuery("todos", async () => {
    const response = await fetch(
      "https://selenmebelapi20240307024627.azurewebsites.net/api/Categories"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return response.json(); // Parse response body as JSON
  });
  

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(
  //         "https://selenmebelapi20240307024627.azurewebsites.net/api/Categories"
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setMyArray(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);
  return (
    <div className={styles.mahsulot}>
      <p className={styles.mttl}>{t("b_mahsulot")}</p>
      <div className={styles.mbody}>
        {isLoading? <Info_load/>:data?data.map((r, index) => (
          <Scale>
            <div className={styles.mgrp} key={index}>
              <img
                src={`${categories_api_url}/DownloadByImageName?imageName=${r.image}`}
                alt="stol va stullar"
              />
              <p>{r.name}</p>
              {r.typeOfFurnitures.length > 0 ? (
                <NavLink to={`/oraliq/${r.id}`}>
                  <button>{t("pod")}</button>
                </NavLink>
              ) : (
                <NavLink to={`/ofis/${r.id}`}>
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
