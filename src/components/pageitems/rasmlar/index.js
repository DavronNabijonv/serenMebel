import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import "../../../style/index.scss";
import Scale from "../../FrameMotion/scale";
import artel from "../../../assets/images/hamkor_logo/artel.jpg";
import ecobozor from "../../../assets/images/hamkor_logo/ecobozor.jpg";
import evos from "../../../assets/images/hamkor_logo/evos.jpg";
import havas from "../../../assets/images/hamkor_logo/havas.jpg";
import itpark from "../../../assets/images/hamkor_logo/itpark.jpg";
import karzinka from "../../../assets/images/hamkor_logo/karzinka.jpg";
import nrg from "../../../assets/images/hamkor_logo/nrg.jpg";
import pepsi from "../../../assets/images/hamkor_logo/pepsi.jpg";
import texnopark from "../../../assets/images/hamkor_logo/tenopark.jpg";
import toshekntcity from "../../../assets/images/hamkor_logo/toshekntcity.jpg";
import zoodmoll from "../../../assets/images/hamkor_logo/zoodmoll.jpg";

export default function Rasmlar() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.rasm}>
      <p className={styles.ttl}>Те кто доверял нам</p>
      <div className={styles.grp}>
        <div className={styles.grp1}>
          <Scale>
            <img src={toshekntcity} className={styles.img} />
          </Scale>
          <Scale>
            <img src={ecobozor} className={styles.img} />
          </Scale>
          <Scale>
            <img src={evos} className={styles.img} />
          </Scale>
        </div>
        <div className={styles.grp1}>
          <Scale>
            <img src={karzinka} className={styles.img} />
          </Scale>
          <Scale>
            <img src={artel} className={styles.img} />
          </Scale>
          <Scale>
            <img src={nrg} className={styles.img} />
          </Scale>
        </div>
        <div className={styles.grp1}>
          <Scale>
            <img src={pepsi} className={styles.img} />
          </Scale>
          <Scale>
            <img src={texnopark} className={styles.img} />
          </Scale>
          <Scale>
            <img src={itpark} className={styles.img} />
          </Scale>
        </div>
      </div>
      <div className={styles.foot}>
        <Scale>
          <img src={zoodmoll} className={styles.zoodmall} />
        </Scale>
        <Scale>
          <img src={havas} className={styles.havas} />
        </Scale>
      </div>
      {innerWidth<605&&<Rasm2/>}
    </div>
  );
}

function Rasm2() {
  return (
    <div className={styles.mobile_rasm}>
      <Scale>
        <img src={toshekntcity} className={styles.img} />
      </Scale>
      <Scale>
        <img src={ecobozor} className={styles.img} />
      </Scale>
      <Scale>
        <img src={evos} className={styles.img} />
      </Scale>
      <Scale>
        <img src={karzinka} className={styles.img} />
      </Scale>
      <Scale>
        <img src={pepsi} className={styles.img} />
      </Scale>
      <Scale>
        <img src={texnopark} className={styles.img} />
      </Scale>
      <Scale>
        <img src={itpark} className={styles.img} />
      </Scale>
      <Scale>
        <img src={artel} className={styles.img} />
      </Scale>
      <Scale>
        <img src={nrg} className={styles.img} />
      </Scale>
      <Scale>
        <img src={zoodmoll} className={styles.img} />
      </Scale>
      <Scale>
        <img src={havas} className={styles.img} />
      </Scale>
    </div>
  );
}
