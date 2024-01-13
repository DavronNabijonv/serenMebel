import React, { useState } from "react";
import styles from './index.module.scss';
import i18n from "../i18";

const locales = {
  uz: { title: "Uzbek", ttl: "uz" },
  ru: { title: "Русский", ttl: "ru" },
};

export default function ChangeLanguage() {
  const [tl, setTl] = useState('uz');

  const handleLanguageChange = (locale) => {
    i18n.changeLanguage(locale.ttl); // Use the key of the locale, not the title
    setTl(locale.ttl);
  };
  

  return (
    <div className={styles.lang}>
      <p>{tl}</p>
      <div className={styles.langchange}>
        {Object.keys(locales).map((localeKey) => (
          <button key={localeKey} onClick={() => handleLanguageChange(locales[localeKey])}>
            {locales[localeKey].title}
          </button>
        ))}
      </div>
    </div>
  );
}
