import { Routes,Route } from "react-router-dom"
import ChangeAble from './one_page'
import Bolalar from "./one_page/bolalar";
import KirishMebel from "./one_page/kirishqismi";
import Ofis from "./one_page/ofis";
import Oshxona from "./one_page/oshxona";
import Stol from "./one_page/stolstul";
import Yotoqxona from "./one_page/yotoqxona";
import Yumshoq from "./one_page/yumshoq";
import OshxonaOraliq from "./components/oraliqPage/oshxona";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChangeAble/>} />
      <Route path="/bolalar" element={<Bolalar/>} />
      <Route path="/km" element={<KirishMebel/>} />
      <Route path="/ofis" element={<Ofis/>} />
      <Route path="/oshxona" element={<Oshxona/>} />
      <Route path="/stol" element={<Stol/>} />
      <Route path="/yotoqxona" element={<Yotoqxona/>} />
      <Route path="/yumshoq" element={<Yumshoq/>} />
      <Route path="/oshxonaOraliq" element={<OshxonaOraliq/>} />
    </Routes>
  )
}

export default App;
