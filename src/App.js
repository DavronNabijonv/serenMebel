import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { routes } from "./layout/routeconfig";
import LoadPart from "./components/loadPart";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadPart />
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
    </QueryClientProvider>
  );
}

export default App;
