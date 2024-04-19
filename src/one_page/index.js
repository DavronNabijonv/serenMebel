import React, { useEffect, useState } from "react";
import AsosiySwiper from "../components/asosiyswiper";
import Mahsulotlar from "../components/pageitems/mahsulotlar";
import Xizmatlar from "../components/pageitems/xizmatlar";
import Haqida from "../components/pageitems/haqida";
import Tarmoq from "../components/pageitems/tarmoqlar";
import Rasmlar from "../components/pageitems/rasmlar";
import LoadPart from "../components/loadPart";
import Aloqa from "../components/pageitems/aloqa";
import MahsulotlarSwiper from "../components/swiper";
import XizmatSwiper from "../components/xizmatswiper";
import { Element } from "react-scroll";
import To_Build from "../components/to_build";

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
