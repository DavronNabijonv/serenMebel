import React, { useEffect } from "react";
import Navbar from "../../../layout/navbar";
import Footer from "../../../layout/footer";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import b1 from "../../../assets/images/seren/ayvon va zal/hi tech/image15.jpg";
import b2 from "../../../assets/images/seren/ayvon va zal/klassik/image5.jpg";

export default function AyvonZal() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.oraliqo}>
        <div className={styles.oraliq_grp}>
          <img src={b1} alt="hi_tech" />
          <p className={styles.oraliq_ttl}>HI TECH</p>
          <NavLink to="/stol">
            <button>Подробное</button>
          </NavLink>
        </div>
        <div className={styles.oraliq_grp}>
          <img src={b2} alt="klassik" />
          <p className={styles.oraliq_ttl}>Klassik</p>
          <NavLink to="/AyvonKlassik">
            <button>Подробное</button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}
