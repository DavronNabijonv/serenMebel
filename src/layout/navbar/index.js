import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { LuMenuSquare } from "react-icons/lu";
import logo from "../../assets/images/logo2.png";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "../../lang_select";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

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
          <NavLink to={"/"}>
            <a className={styles.alone}>
              <img src={logo} />
              SerenMebel
            </a>
          </NavLink>
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
          <Link
            to={props.haqida}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a
              onClick={() => {
                toggle && setToggle(!toggle);
              }}
            >
              {t("haqida")}
            </a>
          </Link>
          <Link
            to={props.mahsulot}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a
              onClick={() => {
                toggle && setToggle(!toggle);
              }}
            >
              {t("mahsulot")}
            </a>
          </Link>
          <Link
            to={props.xizmat}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a
              onClick={() => {
                toggle && setToggle(!toggle);
              }}
            >
              {t("xizmat")}
            </a>
          </Link>
          <Link
            to={props.aloqa}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a
              onClick={() => {
                toggle && setToggle(!toggle);
              }}
            >
              <button>{t("contact")}</button>
            </a>
          </Link>
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
