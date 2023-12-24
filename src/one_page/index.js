import React from "react";
import Navbar from "../layout/navbar";
import AsosiySwiper from "../components/asosiyswiper";
import Mahsulotlar from "../components/pageitems/mahsulotlar";
import Xizmatlar from "../components/pageitems/xizmatlar";
import Haqida from "../components/pageitems/haqida";
import Tarmoq from "../components/pageitems/tarmoqlar";
import Rasmlar from "../components/pageitems/rasmlar";
import Footer from "../layout/footer";
import Aloqa from "../components/pageitems/aloqa";

export default function MainPage() {
  return (
    <div>
      <Navbar asosiy="#asosiy" mahsulot="#mahsulot" xizmat="#xizmat" haqida="#haqida" aloqa="#aloqa" />
      <div id="asosiy">
        <AsosiySwiper />
      </div>
      <div id="mahsulot">
        <Mahsulotlar />
      </div>
      <div id="xizmat">
        <Xizmatlar />
      </div>
      <div id="haqida">
        <Haqida />
      </div>
      <Tarmoq />
      <Rasmlar />
      <div id="aloqa">
        <Aloqa/>
      </div>
      <Footer mahsulot="#mahsulot" xizmat="#xizmat" haqida="#haqida" />
    </div>
  );
}
