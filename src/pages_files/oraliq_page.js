import React, { useEffect, useState } from "react";
import styles from "./oraliq_pages.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Info_load from "../components/loadPart/info_load";
import No_result from "../components/mainPageItems/mahsulotlar/no_result";
import { useQuery } from "react-query";

export default function Oraliq() {
  const { typeId, typeName } = useParams();
  const { t } = useTranslation();
  const [typeArray, setTypeArray] = useState([]);

  const { isLoading, data, error } = useQuery(["oraliq", typeId], async () => {
    const response = await fetch(
      `https://adminserenmebeluz.azurewebsites.net/api/Categories/${typeId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data && Array.isArray(data.typeOfFurnitures)) {
      setTypeArray(data.typeOfFurnitures);
    } else {
      setTypeArray([]);
      console.error("Invalid data format or missing typeOfFurnitures array");
    }
  }, [data, typeId]);

  return (
    <div>
      {isLoading ? (
        <Info_load />
      ) : error ? (
        <div className={styles.no_result_oraliq}>
          <No_result />
        </div>
      ) : (
        <div className={styles.oraliqo}>
          {typeArray.map((r, index) => (
            <div className={styles.oraliq_grp} key={index}>
              <img
                src={`https://adminserenmebeluz.azurewebsites.net/${r.image}`}
                alt="hi_tech"
              />
              <p className={styles.oraliq_ttl}>
                {r.typeOfSelen === 1
                  ? "HI -TECH"
                  : r.typeOfSelen === 2
                  ? "KLASSIK"
                  : r.typeOfSelen === 3
                  ? "ROYAL"
                  : "nimadur"}
              </p>
              <NavLink to={`/ofis/${r.typeOfSelen}/${typeName}`}>
                <button>{t("pod")}</button>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
