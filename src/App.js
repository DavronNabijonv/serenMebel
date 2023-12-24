import { I18nextProvider } from "react-i18next";
import MainPage from "./one_page";
import i18n from "./i18";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <MainPage/>
    </I18nextProvider>
  )
}

export default App;
