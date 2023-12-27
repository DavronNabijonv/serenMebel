import { I18nextProvider } from "react-i18next";
import MainPage from "./index";
import i18n from "./i18";

function ChangeAble() {
  return (
    <I18nextProvider i18n={i18n}>
      <MainPage/>
    </I18nextProvider>
  )
}

export default ChangeAble;
