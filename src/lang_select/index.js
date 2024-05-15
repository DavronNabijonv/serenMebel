import React, { useState } from "react";
import styles from "./index.module.scss";
import i18n from "../i18";

const locales = [
  { name: "Uzbek", code: "uz" },
  { name: "Русский", code: "ru" },
];
export default function ChangeLanguage() {
  const [tl, setTl] = useState("uz");


  return (
    <div className={styles.lang}>
      <p>{tl}</p>
      <div className={styles.langchange}>
        {locales.map(({code, name}) => (
          <button
            key={name}
            onClick={() => {i18n.changeLanguage(code); setTl(code);}}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
