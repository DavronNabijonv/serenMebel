import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { routes } from "./layout/routeConfig";

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
    </>
  );
}

export default App;