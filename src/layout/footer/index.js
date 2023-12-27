import React from 'react'
import styles from './index.module.scss'
import logo from '../../assets/images/logo2.png'
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";

export default function Footer(props) {
  return (
    <div className={styles.footer}>
        <div className={styles.f1}>
            <a href={props.asosiy}><img src={logo} /></a>
            <div className={styles.ancorgrp}>
                <a href={props.haqida}>О КОМПАНИИ</a>
                <a href={props.mahsulot}>ПРОДУКЦИЯ</a>
                <a href={props.xizmat}>Услуги</a>
            </div>
        </div>
        <hr/>
        <div className={styles.f2}>
            <div className={styles.netgrp}>
                <FaTelegramPlane/>
                <RiInstagramFill/>
                <IoLogoYoutube/>
                <RiFacebookFill/>
            </div>
            <p>© SerenMebel tashkiloti serenmebel.uz</p>
        </div>
    </div>
  )
}
