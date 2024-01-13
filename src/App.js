import { Routes, Route } from "react-router-dom";
import ChangeAble from "./one_page";
import Bolalar from "./one_page/bolalar";
import KirishMebel from "./one_page/kirishqismi";
import Ofis from "./one_page/ofis";
import Oshxona from "./one_page/oshxona";
import Stol from "./one_page/stolstul";
import Yotoqxona from "./one_page/yotoqxona";
import Yumshoq from "./one_page/yumshoq";
import OshxonaOraliq from "./components/oraliqPage/oshxona";
import OshxonaKlassik from "./one_page/oshxonaKlassik";
import OshxonaRoyal from "./one_page/oshxonaRoyal";
import AyvonZal from "./components/oraliqPage/ayvonZal";
import AyvonKlassik from "./one_page/ayvonKlassik";
import Polkalar from "./one_page/polkalar";
import Stolst from "./one_page/stolst";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { routes } from "./layout/routeConfig";
import MainPage from "./one_page";

function App() {
  return (
    <>
      <Navbar
          mahsulot="mahsulot"
          xizmat="xizmat"
          haqida="haqida"
          aloqa="aloqa"
        />
      <Routes>
        {routes.map(({ id, ...rest }) => (
          <Route key={id} {...rest} />
        ))}
      </Routes>
      <Footer mahsulot="mahsulot" xizmat="xizmat" haqida="haqida" />
      {/* <MainPage /> */}
    </>
  );
}

export default App;

{
  /* <Routes>
  <Route path="/" element={<ChangeAble />} />
  <Route path="/bolalar" element={<Bolalar />} />
  <Route path="/km" element={<KirishMebel />} />
  <Route path="/ofis" element={<Ofis />} />
  <Route path="/oshxona" element={<Oshxona />} />
  <Route path="/stol" element={<Stol />} />
  <Route path="/yotoqxona" element={<Yotoqxona />} />
  <Route path="/yumshoq" element={<Yumshoq />} />
  <Route path="/oshxonaOraliq" element={<OshxonaOraliq />} />
  <Route path="/OshxonaKlassik" element={<OshxonaKlassik />} />
  <Route path="/OshxonaRoyal" element={<OshxonaRoyal />} />
  <Route path="/AyvonOraliq" element={<AyvonZal />} />
  <Route path="/AyvonKlassik" element={<AyvonKlassik />} />
  <Route path="/polkalar" element={<Polkalar />} />
  <Route path="/stolst" element={<Stolst />} />
</Routes>; */
}
