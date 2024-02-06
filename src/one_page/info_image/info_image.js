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
                <p className="infoimg_ttl"> {r.ttl}</p>
                <p className="infoimg_davlat"><span>Ishlab chiqaruvchi mamlakat:</span> {r.davlat}</p>
                <p className="infoimg_uzunlik"><span>Uzunlik:</span> {r.uzunlik}</p>
                <p className="infoimg_uzunlik"><span>Kenglik:</span> {r.kenglik}</p>
                <p className="infoimg_uzunlik"><span>O`rindiq chuqurligi:</span> {r.chuqurligi}</p>
                <p className="infoimg_uzunlik"><span>Orqa balandlik:</span> {r.orqa_balandlik}</p>
                <p className="infoimg_uzunlik"><span>Erdan balandlik:</span> {r.balandlik}</p>
                <p className="infoimg_uzunlik"><span>Kafolat:</span> {r.kafolat}</p>
                <p className="infoimg_uzunlik"><span>Muddat:</span> {r.muddati}</p>
                <p className="infoimg_narxi"><span>Narxi:</span> {r.narxi}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
