// Main.js
import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { mahsulot } from "../../../db/mahsulotlar";
import { useParams } from "react-router-dom";

function Main() {
  const { itemIndex } = useParams();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [itemIndex]);

  return (
    <div className={styles.main}>
      {mahsulot.map((r) => {
        if (r.id == itemIndex) {
          return (
            <div className={styles.grp} key={r.id}>
              <p className={styles.ttl}>{r.ttl}</p>
              <img src={r.img} />
              <p className={styles.txt}>{r.txt}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Main;
