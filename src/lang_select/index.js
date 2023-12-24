import React, { useState } from "react";
import styles from './index.module.scss'
import i18n from "../i18";

const locales = {
  uz: { title: "Uzbek" },
  ru: { title: "Русский" },
};

export default function ChangeLanguage() {
    const [tl, setTl] = useState('uz')
  return (
    <div className={styles.lang}>
      <p>{tl}</p>
      <div className={styles.langchange}>
        {Object.keys(locales).map((locale) => (
          <button onClick={()=>{i18n.changeLanguage(locale); setTl(locale)}}>{locales[locale].title}</button>
        ))}
      </div>
    </div>
  );
}
