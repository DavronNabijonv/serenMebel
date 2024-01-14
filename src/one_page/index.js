import React, { useEffect, useState } from "react";
import Navbar from "../layout/navbar";
import AsosiySwiper from "../components/asosiyswiper";
import Mahsulotlar from "../components/pageitems/mahsulotlar";
import Xizmatlar from "../components/pageitems/xizmatlar";
import Haqida from "../components/pageitems/haqida";
import Tarmoq from "../components/pageitems/tarmoqlar";
import Rasmlar from "../components/pageitems/rasmlar";
import Footer from "../layout/footer";
import LoadPart from "../components/loadPart";
import Aloqa from "../components/pageitems/aloqa";
import MahsulotlarSwiper from "../components/swiper";
import XizmatSwiper from "../components/xizmatswiper";
import { Element, animateScroll as scroll, scrollSpy } from "react-scroll";
import { Route, Routes } from "react-router-dom";
import { routes } from "../layout/routeConfig";

export default function MainPage() {
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
