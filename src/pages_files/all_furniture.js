import React, { useEffect, useState } from "react";
import styles from "./all_furniture.module.scss";
import b1 from "../assets/images/seren/ofis/image21.webp";
import b2 from "../assets/images/seren/ofis/image13.jpg";
import b3 from "../assets/images/seren/ofis/image15.jpg";
import b4 from "../assets/images/seren/ofis/image12.jpg";
import { useTranslation } from "react-i18next";
import { SiAntdesign } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { DiMaterializecss } from "react-icons/di";
import { FaFileContract } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Info_load from "../components/loadPart/info_load";
import No_result from "../components/mainPageItems/mahsulotlar/no_result";

export default function Ofis() {
  const { t } = useTranslation();
  const { furniture_id, typeName } = useParams();
  const [typeArrayAll , setTypeArrayAll] = useState([]);

  const { isLoading, data , error } = useQuery("ofis", async () => {
    const response = await fetch(
      `https://adminserenmebeluz.azurewebsites.net/api/TypeOfFurnitures/${furniture_id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return response.json(); // Parse response body as JSON
  });
  console.log(data)

  useEffect(() => {
    window.scrollTo(0, 0);

    if (data && Array.isArray(data.furnitures)) {
      setTypeArrayAll(data.furnitures);
      console.log(data.furnitures);
    } else {
      console.error('Invalid data format or missing furnitures array');
    }

  }, [furniture_id]);


  return (
    <div>
      {isLoading ? (
        <Info_load />
      ) : data ? (
        <div className={styles.bolalar}>
          <p className={styles.ttl}>{typeName}</p>
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
          <RasmlarPastki
            array_furniture={typeArrayAll}
          />
        </div>
      ) : (
        <No_result />
      )}
      {error&&<No_result/>}
    </div>
  );
}

function RasmlarPastki({  array_furniture }) {
  const { t } = useTranslation();
  return (
    <div className={styles.rasmlar}>
      {array_furniture.map((r, index) => (
        <div className={styles.rasm_grp1} key={index}>
          <img
            src={`https://adminserenmebeluz.azurewebsites.net/${r.image}`}
            alt="rasm"
          />
          <p>{r.name}</p>
          <button className={styles.btn_rasm_grp1}>{t("pod")}</button>
          <Link
            to={`/items/${r.id}/${r.description}/${r.image}/${
              r.price
            }/${r.name}`}
          >
            <div className={styles.hover_effect}>
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
