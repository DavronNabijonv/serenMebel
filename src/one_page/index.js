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
import XizmatSwiper from '../components/xizmatswiper'

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
    <div>
      <Navbar
        asosiy="#asosiy"
        mahsulot="#mahsulot"
        xizmat="#xizmat"
        haqida="#haqida"
        aloqa="#aloqa"
      />
      <div id="asosiy">
        <AsosiySwiper />
      </div>
      <div id="mahsulot">
        {innerWidth < 600 ? <MahsulotlarSwiper /> : <Mahsulotlar />}
      </div>
      <div id="xizmat">
        {innerWidth < 600 ? <XizmatSwiper /> : <Xizmatlar />}
      </div>
      <div id="haqida">
        <Haqida />
      </div>
      <Tarmoq />
      <Rasmlar />
      <div id="aloqa">
        <Aloqa />
      </div>
      <Footer mahsulot="#mahsulot" xizmat="#xizmat" haqida="#haqida" />
    </div>
  );
}
