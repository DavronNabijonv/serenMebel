import React from "react";
import styles from "./footer.module.scss";
import logo from "../assets/images/logo2.png";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Footer(props) {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <div className={styles.f1}>
        <a href={props.asosiy}>
          <img src={logo} />
        </a>
        <div className={styles.ancorgrp}>
          <Link
            to={props.haqida}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a>{t("haqida")}</a>
          </Link>
          <Link
            to={props.mahsulot}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a>{t("mahsulot")}</a>
          </Link>
          <Link
            to={props.xizmat}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <a>{t("xizmat")}</a>
          </Link>
        </div>
      </div>
      <hr />
      <div className={styles.f2}>
        <div className={styles.netgrp}>
          <FaTelegramPlane />
          <RiInstagramFill />
          <IoLogoYoutube />
          <RiFacebookFill />
        </div>
        <p>© SerenMebel tashkiloti serenmebel.uz</p>
      </div>
    </div>
  );
}
