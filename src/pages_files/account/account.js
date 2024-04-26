import React, { useEffect, useState } from "react";
import "./account.scss";
import img1 from "../../assets/images/seren/bolalar/image1.jpg";
import { FaShoppingCart, FaTruck } from "react-icons/fa";

export default function Account() {
  const [tan, setTan] = useState(false);
  const [buy, setBuy] = useState(true);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="account">
      <div className="nav_grp">
        <p
          className={buy && "buy"}
          onClick={() => {
            setBuy(true);
            setTan(false);
          }}
        >
          <FaTruck />
          {innerWidth>525&&"Buyurtmalar"}
        </p>
        <p
          className={tan && "buy"}
          onClick={() => {
            setBuy(false);
            setTan(true);
          }}
        >
          <FaShoppingCart />
          {innerWidth>525&&"Tanlanganlar"}
        </p>
        <p className="name">Nabijonov Davron</p>
      </div>
      <div className="a_section_body">
        {tan && ""}
        {buy && <Buyurtmalar />}
      </div>
    </div>
  );
}

function Buyurtmalar() {
  return (
    <div className="buy_part">
      <div className="buy_fav1">
        <img src={img1} />
      </div>
      <div className="buy_fav2">
        <p>AA-1124</p>
        <p>
          <span>Narxi: </span> 5 000 000
        </p>
        <p>
          <span>Davlat: </span> Turkiya
        </p>
        <p>
          <span>Uzunlik: </span> 2050mm
        </p>
        <p>
          <span>Kenglik: </span> 730mm
        </p>
        <p>
          <span>Chuqurligi: </span> 450
        </p>
        <p>
          <span>Suyanchiq balandlik: </span> 450
        </p>
        <p>
          <span>Balandlik: </span> 440
        </p>
        <p>
          <span>Kafolat: </span> 1 yil
        </p>
        <p>
          <span>Muddati: </span> 4yil
        </p>
      </div>
    </div>
  );
}
