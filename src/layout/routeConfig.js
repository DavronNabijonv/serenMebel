import AyvonZal from "../components/oraliqPage/ayvonZal";
import Oraliq from "../components/oraliqPage/oshxona";
import AyvonKlassik from "../one_page/ayvonKlassik";
import Bolalar from "../one_page/bolalar";
import KirishMebel from "../one_page/kirishqismi";
import Ofis from "../one_page/ofis";
import Oshxona from "../one_page/oshxona";
import OshxonaKlassik from "../one_page/oshxonaKlassik";
import OshxonaRoyal from "../one_page/oshxonaRoyal";
import Polkalar from "../one_page/polkalar";
import Stolst from "../one_page/stolst";
import Stol from "../one_page/stolstul";
import Yotoqxona from "../one_page/yotoqxona";
import Yumshoq from "../one_page/yumshoq";
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
    path: "/bolalar",
    element: <Bolalar />,
  },
  {
    id: 3,
    path: "/km",
    element: <KirishMebel />,
  },
  {
    id: 4,
    path: "/ofis/:furniture_id",
    element: <Ofis />,
  },
  {
    id: 5,
    path: "/oshxona",
    element: <Oshxona />,
  },
  {
    id: 6,
    path: "/stol",
    element: <Stol />,
  },
  {
    id: 7,
    path: "/yotoqxona",
    element: <Yotoqxona />,
  },
  {
    id: 8,
    path: "/yumshoq",
    element: <Yumshoq />,
  },
  {
    id: 9,
    path: "/oraliq/:typeId",
    element: <Oraliq />,
  },
  {
    id: 10,
    path: "/OshxonaKlassik",
    element: <OshxonaKlassik />,
  },
  {
    id: 11,
    path: "/OshxonaRoyal",
    element: <OshxonaRoyal />,
  },
  {
    id: 12,
    path: "/AyvonOraliq",
    element: <AyvonZal />,
  },
  {
    id: 13,
    path: "/AyvonKlassik",
    element: <AyvonKlassik />,
  },
  {
    id: 14,
    path: "/polkalar",
    element: <Polkalar />,
  },
  {
    id: 15,
    path: "/stolst",
    element: <Stolst />,
  },
  {
    id: 16,
    path: "/build",
    element: <Image_build />,
  },
  {
    id: 17,
    path: "/items/:name/:id",
    element: <Info_image />,
  },
  {
    id: 18,
    path: "/account",
    element: <Account/>,
  },
];