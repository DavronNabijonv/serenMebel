import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { LuMenuSquare } from "react-icons/lu";
import logo from "../../assets/images/logo2.png";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "../../lang_select";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  return (
    <div className={styles.navbar}>
      <div className={styles.main}>
        <div className={styles.responsive}>
          <Link to={"/"}>
            <a href={props.asosiy} className={styles.alone}>
              <img src={logo} />
              SerenMebel
            </a>
          </Link>
          <LuMenuSquare
            className={styles.resp}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div className={styles.changelang}>
            <ChangeLanguage />
          </div>
        </div>
        <div className={styles.nvg} style={toggle ? { display: "flex" } : {}}>
          <a
            href={props.haqida}
            onClick={() => {
              toggle && setToggle(!toggle);
            }}
          >
            {t("haqida")}
          </a>
          <a
            href={props.mahsulot}
            onClick={() => {
              toggle && setToggle(!toggle);
            }}
          >
            {t("mahsulot")}
          </a>
          <a
            href={props.xizmat}
            onClick={() => {
              toggle && setToggle(!toggle);
            }}
          >
            {t("xizmat")}
          </a>
          <a
            href={props.aloqa}
            onClick={() => {
              toggle && setToggle(!toggle);
            }}
          >
            <button>{t("contact")}</button>
          </a>
        </div>
      </div>
      <div
        className={styles.overlay}
        onClick={() => {
          toggle && setToggle(!toggle);
        }}
        style={toggle ? { height: "800px" } : {}}
      ></div>
    </div>
  );
}
