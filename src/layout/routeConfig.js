import Oraliq from "../components/oraliqPage/oraliq_qismi";
import Ofis from "../one_page/mebel_rasmlari";
import MainPage from "../one_page";
import Image_build from "../build_image/image_build";
import Info_image from "../one_page/info_image/info_image";
import Account from "../account/account";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <MainPage />,
  },
  {
    id: 2,
    path: "/ofis/:furniture_id",
    element: <Ofis />,
  },
  {
    id: 3,
    path: "/oraliq/:typeId",
    element: <Oraliq />,
  },
  {
    id: 4,
    path: "/build",
    element: <Image_build />,
  },
  {
    id: 5,
    path: "/items/:featuresData/:img_url/:price/:furniture_name",
    element: <Info_image />,
  },
  {
    id: 6,
    path: "/account",
    element: <Account/>,
  },
];