import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Info_load from "../../loadPart/info_load";

export default function Oraliq() {
  const { typeId } = useParams();
  const { t } = useTranslation();
  const type_of_furniture_url =
    "https://selenmebelapi20240307024627.azurewebsites.net/api/TypeOfFurnitures/";
  const [typeArray, setTypeArray] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchType() {
      try {
        const responseType = await fetch(
          `https://selenmebelapi20240307024627.azurewebsites.net/api/TypeOfFurnitures/${typeId}`
        );
        const typeData = await responseType.json();
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
      {isLoading? <Info_load/> :<div className={styles.oraliqo}>
        {typeArray.map((r, index) => (
          <div className={styles.oraliq_grp} key={index}>
            <img
              src={`${type_of_furniture_url}DownloadByImageName?imageName=${r.image}`}
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
      </div>}
    </div>
  );
}
