import React from 'react'
import styles from './index.module.scss'
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";

export default function Tarmoq() {
  return (
    <div className={styles.tarmoq}>
        <p className={styles.ttl}>Подпишитесь на нашу рассылку</p>
        <div className={styles.grp}>
            <a><button><FaTelegramPlane/> Telegram</button></a>
            <a><button><RiInstagramFill/> Instagram</button></a>
            <a><button><IoLogoYoutube/> YouTobe</button></a>
            <a><button><RiFacebookFill/> Facebook</button></a>
        </div>
    </div>
  )
}
