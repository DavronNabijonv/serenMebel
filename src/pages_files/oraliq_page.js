import React, { useEffect, useState } from "react";
import styles from "./oraliq_pages.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Info_load from "../components/loadPart/info_load";
import No_result from "../components/mainPageItems/mahsulotlar/no_result";

export default function Oraliq() {
  const { typeId } = useParams();
  const { t } = useTranslation();
  const [typeArray, setTypeArray] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchType() {
      try {
        const responseType = await fetch(
          `https://selenmebelapi20240307024627.azurewebsites.net/api/TypeOfFurnitures/${typeId}`
        );
        const typeData = await responseType.json();
        console.log(typeData )
        setTypeArray((prevTypeArray) => [typeData]);
      } catch (error) {
        console.error("Error fetching type data:", error);
      }
    }

    fetchType();
  }, [typeId]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <Info_load />
      ) : typeArray ? (
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
                  : "ROYAL"}
              </p>
              <NavLink to={`/ofis/${r.typeOfSelen}`}>
                <button>{t("pod")}</button>
              </NavLink>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.no_result_oraliq}>
          <No_result />
        </div>
      )}
    </div>
  );
}
