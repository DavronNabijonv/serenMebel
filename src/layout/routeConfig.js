import MainPage from "../pages_files/main_page";
import Image_build from "../build_image/image_build";
import Oraliq from "../pages_files/oraliq_page";
import Info_image from "../pages_files/info_image";
import Ofis from "../pages_files/all_furniture";
import Account from "../pages_files/account/account";
import Not_found from "../pages_files/not_found";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <MainPage />,
  },
  {
    id: 2,
    path: "/ofis/:furniture_id/:typeName",
    element: <Ofis/>,
  },
  {
    id: 3,
    path: "/oraliq/:typeId/:typeName",
    element:  <Oraliq/>,
  },
  {
    id: 4,
    path: "/build",
    element: <Image_build />,
  },
  {
    id: 5,
    path: "/items/:id/:tarif/:img_url/:price/:furniture_name",
    element: <Info_image/>,
  },  
  {
    id: 6,
    path: "/account",
    element: <Account/>,
  },
  {
    id:7,
    path:"/*",
    element:<Not_found/>
  }
];