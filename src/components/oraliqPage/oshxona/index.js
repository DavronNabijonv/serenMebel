import React, { useEffect } from "react";
import Navbar from "../../../layout/navbar";
import Footer from "../../../layout/footer";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
import b1 from "../../../assets/images/seren/oshxona/HI-TECH/image47.jpg";
import b2 from "../../../assets/images/seren/oshxona/HI-TECH/image48.jpg";
import b3 from "../../../assets/images/seren/oshxona/HI-TECH/image42.jpg";

export default function OshxonaOraliq() {
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
          <NavLink to="/oshxona">
            <button>Подробное</button>
          </NavLink>
        </div>
        <div className={styles.oraliq_grp}>
          <img src={b2} alt="klassik" />
          <p className={styles.oraliq_ttl}>Klassik</p>
          <button>Подробное</button>
          {/* <NavLink>
            <button>Подробное</button>
          </NavLink> */}
        </div>
        <div className={styles.oraliq_grp}>
          <img src={b3} alt="royal" />
          <p className={styles.oraliq_ttl}>Royal</p>
          <button>Подробное</button>
          {/* <NavLink>
            <button>Подробное</button>
          </NavLink> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
