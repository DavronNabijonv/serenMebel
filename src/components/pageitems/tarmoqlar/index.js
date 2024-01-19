import React from 'react'
import styles from './index.module.scss'
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

export default function Tarmoq() {
  const {t} = useTranslation();
  return (
    <div className={styles.tarmoq}>
        <p className={styles.ttl}>{t("tarmoq_ttl")}</p>
        <div className={styles.grp}>
            <a href='https://t.me/SEREN_MEBEL'><button><FaTelegramPlane/> Telegram</button></a>
            <a href='https://www.instagram.com/seren_mebel_uz?igsh=dmU4cGtlM3hjejE1'><button><RiInstagramFill/> Instagram</button></a>
            <a><button><IoLogoYoutube/> YouTobe</button></a>
            <a href='https://www.facebook.com/profile.php?id=61555581179354&mibextid=JRoKGi' target='_blank'><button><RiFacebookFill/> Facebook</button></a>
        </div>
    </div>
  )
}
