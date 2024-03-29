import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import stylesb from "../bolalar/index.module.scss";
import b1 from "../../assets/images/seren/ofis/image21.webp";
import b2 from "../../assets/images/seren/ofis/image13.jpg";
import b3 from "../../assets/images/seren/ofis/image15.jpg";
import b4 from "../../assets/images/seren/ofis/image12.jpg";
import { imagesOfis } from "../../components/db/mahsulotlar";
import { useTranslation } from "react-i18next";
import { SiAntdesign } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { DiMaterializecss } from "react-icons/di";
import { FaFileContract } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

export default function Ofis() {
  const { t } = useTranslation();
  const { furniture_id } = useParams();
  const furniture_url_by_index =
    "https://selenmebelapi20240307024627.azurewebsites.net/api/Furnitures/";
  const [furnitureArray, setFurnitureArray] = useState([]);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    async function fetchType() {
      try {
        const responseType = await fetch(
          `https://selenmebelapi20240307024627.azurewebsites.net/api/Furnitures/ByPagination?PageIndex=${furniture_id}`
        );
        const typeData = await responseType.json();
        setFurnitureArray(typeData);
        console.log(furnitureArray)
      } catch (error) {
        console.error("Error fetching type data:", error);
      }
    }

    fetchType();
  }, [furniture_id]);
  return (
    <div>
      <div className={styles.bolalar}>
        <p className={styles.ttl}>{t("m3")}</p>
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
        <RasmlarPastki url_image={furniture_url_by_index} array_furniture={furnitureArray} />
      </div>
    </div>
  );
}

function RasmlarPastki({url_image, array_furniture}) {
  const { t } = useTranslation();
  const [tag3, setTag3] = useState("imagesOfis");
  return (
    <div className={stylesb.rasmlar}>
      {array_furniture.map((r, index) => (
        <div className={stylesb.rasm_grp1}>
          <img src={`${url_image}DownloadByImageName?imageName=${r.image}`} alt="rasm" />
          <p>{r.name}</p>
          <button>{t("pod")}</button>
          <Link to={`/items/${tag3}/${index}`}>
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
