import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./info_image.scss";
import {
  imagesBolalar,
  imagesHitech,
  imagesKlassik,
  imagesOfis,
  imagesPolka,
  imagesRoyal,
  imagesShkaf,
  imagesStol,
  imagesYotoqxona,
  imagesYumshoq,
  imagesZalHi_tech,
  imagesZalKlassik,
} from "../../components/db/mahsulotlar";

const imageArrays = {
  imagesBolalar,
  imagesHitech,
  imagesKlassik,
  imagesOfis,
  imagesPolka,
  imagesRoyal,
  imagesShkaf,
  imagesStol,
  imagesYotoqxona,
  imagesYumshoq,
  imagesZalHi_tech,
  imagesZalKlassik,
};

export default function Info_image() {
  const { name, id } = useParams();
  const [a_name, setA_name] = useState([]);

  useEffect(() => {
    if (imageArrays.hasOwnProperty(name)) {
      setA_name(imageArrays[name]);
    } else {
      // Handle the case where 'name' is not recognized
    }
  }, [name]);

  return (
    <div>
      {a_name.map((r, index) => {
        if (index == id) {
          return (
            <div className="info_image_grp">
              <img src={r.img} />
              <div className="info_in_grp">
                <p className="infoimg_ttl">{r.ttl}</p>
                <p className="infoimg_davlat">{r.davlat} mahsuloti</p>
                <p className="infoimg_text">{r.text}</p>
                <p className="infoimg_narxi">Narxi: {r.narxi}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
