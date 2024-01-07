import React from "react";
import styles from "./index.module.scss";
import { xizmat } from "../../db/xizmatlar/index";
import Popup from "../../FrameMotion/popup";
import { useTranslation } from "react-i18next";
import { SiAntdesign } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { DiMaterializecss } from "react-icons/di";
import { TbRulerMeasure } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdAddHomeWork } from "react-icons/md";
import { FcSupport } from "react-icons/fc";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaFileContract } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export default function Xizmatlar() {
  const { t } = useTranslation();
  return (
    <div className={styles.xizmat}>
      <p className={styles.xttl}>{t("b_xizmat")}</p>
      <div className={styles.xbody}>
        <Popup>
          <div className={styles.grp}>
            <SiAntdesign/>
            <p className={styles.gttl}>{t("x_ttl1")}</p>
            <p className={styles.gtxt}>{t("x_txt1")}</p>
          </div>
        </Popup>
        <Popup>
          <div className={styles.grp}>
            <GrTechnology/>
            <p className={styles.gttl}>{t("x_ttl5")}</p>
            <p className={styles.gtxt}>{t("x_txt5")}</p>
          </div>
        </Popup>
        <Popup>
          <div className={styles.grp}>
            <DiMaterializecss/>
            <p className={styles.gttl}>{t("x_ttl11")}</p>
            <p className={styles.gtxt}>{t("x_txt11")}</p>
          </div>
        </Popup>
        <Popup>
          <div className={styles.grp}>
            <TbRulerMeasure/>
            <p className={styles.gttl}>{t("x_ttl2")}</p>
            <p className={styles.gtxt}>{t("x_txt2")}</p>
          </div>
        </Popup>
        <Popup>
          <div className={styles.grp}>
            <CiDeliveryTruck/>
            <p className={styles.gttl}>{t("x_ttl3")}</p>
            <p className={styles.gtxt}>{t("x_txt3")}</p>
          </div>
        </Popup>
        <Popup>
          <div className={styles.grp}>
            <MdAddHomeWork/>
            <p className={styles.gttl}>{t("x_ttl4")}</p>
            <p className={styles.gtxt}>{t("x_txt4")}</p>
          </div>
        </Popup>
        <Popup>
          <div className={styles.grp}>
            <FcSupport/>
            <p className={styles.gttl}>{t("x_ttl6")}</p>
            <p className={styles.gtxt}>{t("x_txt6")}</p>
          </div>
        </Popup>
        <Popup>
          <div className={styles.grp}>
            <GrDocumentPerformance/>
            <p className={styles.gttl}>{t("x_ttl7")}</p>
            <p className={styles.gtxt}>{t("x_txt7")}</p>
          </div>
        </Popup>
        <Popup>
          <div className={styles.grp}>
            <FaFileContract/>
            <p className={styles.gttl}>{t("x_ttl8")}</p>
            <p className={styles.gtxt}>{t("x_txt8")}</p>
          </div>
        </Popup>
        <Popup>
          <div className={styles.grp}>
            <MdOutlinePayment/>
            <p className={styles.gttl}>{t("x_ttl9")}</p>
            <p className={styles.gtxt}>{t("x_txt9")}</p>
          </div>
        </Popup>
        <Popup>
          <div className={styles.grp}>
            <BiSupport/>
            <p className={styles.gttl}>{t("x_ttl10")}</p>
            <p className={styles.gtxt}>{t("x_txt10")}</p>
          </div>
        </Popup>
      </div>
    </div>
  );
}
