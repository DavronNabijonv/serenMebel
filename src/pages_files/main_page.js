import React, { useEffect, useState } from "react";
import AsosiySwiper from "../components/swiper/asosiy_swiper";
import Mahsulotlar from "../components/mainPageItems/mahsulotlar/mahsulot";
import Xizmatlar from "../components/mainPageItems/xizmat";
import Haqida from "../components/mainPageItems/haqida";
import Tarmoq from "../components/mainPageItems/tarmoq";
import Rasmlar from "../components/mainPageItems/rasm";
import LoadPart from "../components/loadPart";
import Aloqa from "../components/mainPageItems/aloqa";
import MahsulotlarSwiper from "../components/swiper/swiper";
import XizmatSwiper from "../components/swiper/xizmat_swiper";
import { Element } from "react-scroll";
import To_Build from "../build_image/to_build";

export default function MainPage() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (window.onload) {
    return <LoadPart />;
  }

  return (
    <>
      <div>
        <AsosiySwiper />
        <Element name="mahsulot">
          {innerWidth < 600 ? <MahsulotlarSwiper /> : <Mahsulotlar />}
        </Element>
        <To_Build />
        <Element name="xizmat">
          {innerWidth < 600 ? <XizmatSwiper /> : <Xizmatlar />}
        </Element>
        <Element name="haqida">
          <Haqida />
        </Element>
        <Tarmoq />
        <Rasmlar />
        <Element name="aloqa">
          <Aloqa />
        </Element>
      </div>
    </>
  );
}
